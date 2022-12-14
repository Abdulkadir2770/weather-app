const weatherData = (() => {
    function convertData(data) {
        const {
          name: cityName,
          main: { temp: temperature, feels_like: feelsLike, humidity },
          wind: { speed: windSpeed },
        } = data;
        return { cityName, temperature, feelsLike, humidity, windSpeed };
      }
    
      async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2a55435c1aefc2d658414111e388415c`;
        try {
          const response = await fetch(endpoint, { mode: "cors" });
          if (!response.ok) {
            throw new Error(`City ${city} not found`);
        }

          const data = convertData(await response.json());
          return data;
        } catch (error) {
          alert(error);
          return null;
        }
      }
      return { getData };
})();

export {weatherData};

