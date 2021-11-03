const data = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg",
  },
];

const homesInfoPanel = document.querySelector(".homes-panel");

fillSlider().catch(() => {
  alert("Oops! Something went wrong. Please try again later.");
});

async function fillSlider() {
  insertFunc(data);
  if (sessionStorage.getItem("hotels")) {
    const dataRequest = sessionStorage.getItem("hotels");
    insertFunc(JSON.parse(dataRequest));
  } else {
    await $.ajax("https://fe-student-api.herokuapp.com/api/hotels/popular", {
      success: function (data) {
        sessionStorage.setItem("hotels", JSON.stringify(data));
        insertFunc(data);
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
