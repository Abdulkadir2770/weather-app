import { pageLoad } from "./modules/onPageLoad";
import { weatherData } from "./modules/weather";
import { view } from "./modules/view";


const display = (() => {
    const form = document.querySelector(".form");
    const btn = document.querySelector("#btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    // button
    btn.addEventListener("click", async () => {
        const displayedBox = document.querySelector(".displayedResultBox");
        displayedBox.style.display = "block";

        const city = document.querySelector("#cityName");
        const input = document.querySelector("#city-choice");
        city.innerText = input.value;

        // display nothing if the city is not provided
        if(input.value === "") {
            displayedBox.style.display = "none";
        };
        const weather = await weatherData.getData(input.value);
        view.setSearchResult(weather);
    })


})();

