const townSearch = document.getElementById("town-search");
const resultPanel = document.getElementById("resultPanel");
const submitButton = document.getElementById("submitButton");
const adults = document.getElementById("adultsValue");
const rooms = document.getElementById("roomsValue");

const buttonsForChildrenAndAdults = [
  document.getElementById("reduceButton1"),
  document.getElementById("reduceButton2"),
  document.getElementById("increaseButton1"),
  document.getElementById("increaseButton2"),
];

submitButton.addEventListener("click", searchRequest);

for (const button of buttonsForChildrenAndAdults) {
  button.addEventListener("click", searchDisable);
}

async function searchRequest() {
  const lastChild = resultPanel.lastChild;
  if (lastChild.nodeName !== "H2") {
    lastChild.remove();
  }

  const hotelsPanel = document.createElement("div");
  hotelsPanel.classList.add("hotels-panel");
  resultPanel.append(hotelsPanel);

  const adultsValue = adults.innerHTML;
  const roomsValue = rooms.innerHTML;
  const yearSelector = document.getElementsByClassName("year-selector");
  const ageArray = [];
  for (const age of yearSelector) {
    const ageValue = age.value.match(/\d/g).join("");
    ageArray.push(ageValue);
  }

  const result = await getResponse(
    townSearch.value,
    adultsValue,
    ageArray,
    roomsValue
  );
  if (result.length === 0) {
    insertNonResult(hotelsPanel);
  } else insertAvailable(result, hotelsPanel);

  function responsiveSearch(slideValue) {
    if (result.length >= slideValue) {
      slickSliderForSearch();
    } else {
      const images = hotelsPanel.querySelectorAll("img");
      for (const image of images) {
        image.classList.add("hotels-img");
      }
      hotelsPanel.style.display = "flex";
    }
  }
  if (document.documentElement.clientWidth >= 1025) responsiveSearch(4);
  else if (document.documentElement.clientWidth >= 769) responsiveSearch(3);
  else responsiveSearch(2);

  document.getElementById("resultPanel").classList.remove("display");
}

async function getResponse(search, adults, children, rooms) {
  try {
    const response = await fetch(
      `https://fe-student-api.herokuapp.com/api/hotels?search=${search}&adults=${adults}&children=${children}&rooms=${rooms}`
    );
    return await response.json();
  } catch (e) {
    // sad smile will become visible
    return [];
  }
}

function searchDisable() {
  const adultsValue = adults.innerHTML;
  const childrenValue = document.getElementById("childrenValue").innerHTML;

  if (childrenValue > 0 && adultsValue === "0") {
    submitButton.setAttribute("disabled", "disabled");
  } else submitButton.removeAttribute("disabled");
}

function insertNonResult(panel) {
  const homesItem = document.createElement("div");
  homesItem.classList.add("homes-item");
  homesItem.innerHTML = `
      <img src="../assets/img/sadSmile.png" alt="black sad smile" class="homes-img">`;
  panel.append(homesItem);
}

function insertAvailable(arr, panel) {
  arr.map((item) => {
    const homesItem = document.createElement("div");
    homesItem.classList.add("homes-item");
    homesItem.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="homes-img">
      <a class="homes-link" href="#">${item.name}</a>
      <span class="homes-place">${item.city}, ${item.country}</span>`;
    panel.append(homesItem);
  });
}

function slickSliderForSearch() {
  $(".hotels-panel").slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
}
