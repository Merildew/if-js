const homesInfoPanel = document.querySelector(".homes-panel");

fillSlider();

function fillSlider() {
  fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
    .then((response) =>
      response.json().then((hotelArr) => {
        insertFunc(hotelArr);
      })
    )
    .then(() => $(document).ready(slickSlider));
}

function insertFunc(arr) {
  arr.map((item) => {
    const homesItem = document.createElement("div");
    homesItem.classList.add("homes-item");
    homesItem.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="homes-img">
      <a class="homes-link" href="#">${item.name}</a>
      <span class="homes-place">${item.city}, ${item.country}</span>`;
    homesInfoPanel.append(homesItem);
  });
}

function slickSlider() {
  $(".homes-panel").slick({
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
