// formatting date
const date = "2020-11-26";

function formatDate(currentDate) {
  let newDate = currentDate.split("-");
  const year = newDate[0];
  const month = newDate[1];
  const day = newDate[2];
  newDate = `${day}.${month}.${year}`;
  return newDate;
}

console.log(date);
console.log(formatDate(date));

// search function
const data = [
  {
    country: "Russia",
    city: "Saint Petersburg",
    hotel: "Hotel Leopold",
  },
  {
    country: "Spain",
    city: "Santa Cruz de Tenerife",
    hotel: "Apartment Sunshine",
  },
  {
    country: "Slowakia",
    city: "Vysokie Tatry",
    hotel: "Villa Kunerad",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hostel Friendship",
  },
  {
    country: "Indonesia",
    city: "Bali",
    hotel: "Ubud Bali Resort&SPA",
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    hotel: "King Kong Hostel",
  },
  {
    country: "Marocco",
    city: "Ourika",
    hotel: "Rokoko Hotel",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hotel Rehberge Berlin Mitte",
  },
];

const word = prompt("What are you looking for?").toLowerCase().trim();
console.log(search(word));

function search(target) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const strData = Object.values(data[i]).join(" ").toLowerCase();
    if (strData.includes(target)) {
      result.push(data[i]);
    }
  }
  if (result.length === 0) return "nothing was found";
  else return result;
}
