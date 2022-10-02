const pageLoad = (() => {
    const container = document.querySelector(".container")

    container.innerHTML = `
        <nav>
            <div>
                <img src="./assets/imgs/cloudy.png" />
            </div>
            <h1>Weather App</h1>
        </nav>

        <main>
            <form class="form">
                <input type="text" id="city-choice" name="city-choice" placeholder="Enter city name">
                <button type="#" id="btn">Search</button>
            </form>
            <div class="displayedResultBox">
                <h1 id="cityName"></h1>
                <h4 id="temperature"></h4>
                <p id="feelsLike"></p>
                <p id="humidity"></p>
                <p id="wind"></p>
            </div>
        </main>
    `;

    function submitForm(event) {
        event.preventDefault();
    };
})();

export {pageLoad};