const homesInfoPanel = document.querySelector(".homes-panel");

fillSlider().catch(() => {
  alert("Oops! Something went wrong. Please try again later.");
});

async function fillSlider() {
  if (sessionStorage.getItem("hotels")) {
    const dataRequest = sessionStorage.getItem("hotels");
    insertFunc(JSON.parse(dataRequest));
  } else {
    await $.ajax("https://fe-student-api.herokuapp.com/api/hotels/popular", {
      success: function (data) {
        sessionStorage.setItem("hotels", JSON.stringify(data));
      },
    });
  }
  $(document).ready(slickSlider);
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
