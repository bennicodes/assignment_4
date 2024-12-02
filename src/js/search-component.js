const countries = [
  {
    name: "Norway",
    continent: "Europe",
    capital: "Oslo",
    population: 5400000,
    isLandlocked: false,
    flag: "🇳🇴",
  },
  {
    name: "Nepal",
    continent: "Asia",
    capital: "Kathmandu",
    population: 30030000,
    isLandlocked: true,
    flag: "🇳🇵",
  },
  {
    name: "Niger",
    continent: "Africa",
    capital: "Niamey",
    population: 25100000,
    isLandlocked: true,
    flag: "🇳🇪",
  },
  {
    name: "Netherlands",
    continent: "Europe",
    capital: "Amsterdam",
    population: 17400000,
    isLandlocked: false,
    flag: "🇳🇱",
  },
  {
    name: "South Korea",
    continent: "Asia",
    capital: "Seoul",
    population: 51780000,
    isLandlocked: false,
    flag: "🇰🇷",
  },
  {
    name: "South Africa",
    continent: "Africa",
    capital: "Pretoria",
    population: 60040000,
    isLandlocked: false,
    flag: "🇿🇦",
  },
  {
    name: "Sweden",
    continent: "Europe",
    capital: "Stockholm",
    population: 10400000,
    isLandlocked: false,
    flag: "🇸🇪",
  },
  {
    name: "Spain",
    continent: "Europe",
    capital: "Madrid",
    population: 47350000,
    isLandlocked: false,
    flag: "🇪🇸",
  },
  {
    name: "India",
    continent: "Asia",
    capital: "New Delhi",
    population: 1393000000,
    isLandlocked: false,
    flag: "🇮🇳",
  },
  {
    name: "Indonesia",
    continent: "Asia",
    capital: "Jakarta",
    population: 273500000,
    isLandlocked: false,
    flag: "🇮🇩",
  },
  {
    name: "Iceland",
    continent: "Europe",
    capital: "Reykjavik",
    population: 366000,
    isLandlocked: false,
    flag: "🇮🇸",
  },
  {
    name: "Iran",
    continent: "Asia",
    capital: "Tehran",
    population: 84900000,
    isLandlocked: false,
    flag: "🇮🇷",
  },
  {
    name: "Russia",
    continent: "Europe/Asia",
    capital: "Moscow",
    population: 145900000,
    isLandlocked: false,
    flag: "🇷🇺",
  },
  {
    name: "Romania",
    continent: "Europe",
    capital: "Bucharest",
    population: 19000000,
    isLandlocked: false,
    flag: "🇷🇴",
  },
  {
    name: "Portugal",
    continent: "Europe",
    capital: "Lisbon",
    population: 10200000,
    isLandlocked: false,
    flag: "🇵🇹",
  },
];

const countriesContainer = document.querySelector(".countries");
const searchInput = document.querySelector(".search__input");

// ----------------------
document.addEventListener("DOMContentLoaded", () => renderCountries(countries));

// Create Flag Cards --------------
function renderCountries(countriesArray) {
  countriesContainer.textContent = "";
  countriesArray.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("flag__card");

    const flagContainer = document.createElement("span");
    flagContainer.classList.add("flag__container");

    const descriptionContainer = document.createElement("span");
    descriptionContainer.classList.add("description__container");

    const countryName = document.createElement("p");
    const countryContinent = document.createElement("p");
    const countryCapital = document.createElement("p");
    const countryPopulation = document.createElement("p");
    const countryLandLocked = document.createElement("p");

    // APPENDING ELEMENTS -----------
    countriesContainer.append(card);
    card.append(flagContainer, descriptionContainer);
    descriptionContainer.append(
      countryName,
      countryContinent,
      countryCapital,
      countryPopulation,
      countryLandLocked
    );

    //INSERTING CONTENT ---------------
    flagContainer.textContent = country.flag;
    countryName.textContent = `Name: ${country.name}`;
    countryContinent.textContent = `Continent: ${country.continent}`;
    countryCapital.textContent = `Capital: ${country.capital}`;
    countryPopulation.textContent = `Population: ${country.population}`;
    countryLandLocked.textContent = `Landlocked: ${
      country.isLandlocked ? "Yes" : "No"
    }`;
  });
}

// Search Filter ------------
searchInput.addEventListener("input", (e) => {
  let filteredCountries = [...countries];
  filteredCountries = filteredCountries.filter((country) => {
    return country.name.toLowerCase().startsWith(e.target.value.toLowerCase());
  });

  renderCountries(filteredCountries);
});
