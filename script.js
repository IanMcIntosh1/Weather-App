let weather = {
    "api key": "366b4b69c97dea381d067c5e6a2d85fd",
    fetchWeather: function(){
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
            + city
            +"&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}";
        document.querySelector(".description").innerText = "description";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        }
    };
