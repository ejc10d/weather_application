// set variables for the page
var api_key = "662c5967dd4fc498f7aec4c9282e1df5"
var now = moment().format("MM/D/YY");
var currentDate = moment().format('MMMM Do YYYY || h:mm a');
$("#currentDay").text(currentDate);
var btn = $("#searchBtn");
var searchInputVal = document.querySelector('#city-input').value;
var weather_url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + searchInputVal + "&appid=" + api_key;
var forecast_url = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + searchInputVal + "&appid=" + api_key;

function getCityWeather() {
    $("#result-text").html(searchInputVal);
// handle if a person tries to enter a blank field
    if (!searchInputVal) {
        console.error("please enter a city");
        return;
    }
// fetch the API
    fetch(weather_url)
        .then(function (response) {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
            $("#result-text").text(searchInputVal + " not found.");
        })

        showCityWeather();
    }


function showCityWeather(data) {
    // console.log(data);
    $("#result-text").text(searchInputVal + " (" + now + ")");
    $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    $("#temp-search-results").text("Temp: " + data.main.temp + "°F");
    $("#wind-search-results").text("Wind: " + data.wind.speed + " mph");
    $("#hum-search-results").text("Humidity: " + data.main.humidity + "%");
        }

function getForecast() {
    $("#result-text").html(searchInputVal);

    if (!searchInputVal) {
        console.error("please enter a city");
        return;
    }

    fetch(forecast_url)
        .then(function (response) {
            return response.json();
        })
    }


function showForecastWeather(data) {
    getForecast()
    .then( $(".futureDay").addClass("card p-2");
            $("#futureday1").text(moment().add(1, 'days').format("MM/D/YY"));
            $("#forecast-weather-icon1").attr("src", "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png");
            $("#forecast-temp-search-results1").text("Temp: " + data.list[5].main.temp + "°F");
            $("#forecast-wind-search-results1").text("Wind: " + data.list[5].wind.speed + " mph");
            $("#forecast-hum-search-results1").text("Humidity: " + data.list[5].main.humidity + "%");
        )}

        .then(function (data) {
            $(".futureDay").addClass("card p-2");
            $("#futureday2").text(moment().add(2, 'days').format("MM/D/YY"));
            $("#forecast-weather-icon2").attr("src", "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png");
            $("#forecast-temp-search-results2").text("Temp: " + data.list[13].main.temp + "°F");
            $("#forecast-wind-search-results2").text("Wind: " + data.list[13].wind.speed + " mph");
            $("#forecast-hum-search-results2").text("Humidity: " + data.list[13].main.humidity + "%");
        })

    fetch(forecast_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $(".futureDay").addClass("card p-2");
            $("#futureday3").text(moment().add(3, 'days').format("MM/D/YY"));
            $("#forecast-weather-icon3").attr("src", "http://openweathermap.org/img/w/" + data.list[22].weather[0].icon + ".png");
            $("#forecast-temp-search-results3").text("Temp: " + data.list[22].main.temp + "°F");
            $("#forecast-wind-search-results3").text("Wind: " + data.list[22].wind.speed + " mph");
            $("#forecast-hum-search-results3").text("Humidity: " + data.list[22].main.humidity + "%");
        })

    fetch(forecast_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $(".futureDay").addClass("card p-2");
            $("#futureday4").text(moment().add(4, 'days').format("MM/D/YY"));
            $("#forecast-weather-icon4").attr("src", "http://openweathermap.org/img/w/" + data.list[29].weather[0].icon + ".png");
            $("#forecast-temp-search-results4").text("Temp: " + data.list[29].main.temp + "°F");
            $("#forecast-wind-search-results4").text("Wind: " + data.list[29].wind.speed + " mph");
            $("#forecast-hum-search-results4").text("Humidity: " + data.list[29].main.humidity + "%");
        })

    fetch(forecast_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $(".futureDay").addClass("card p-2");
            $("#futureday5").text(moment().add(5, 'days').format("MM/D/YY"));
            $("#forecast-weather-icon5").attr("src", "http://openweathermap.org/img/w/" + data.list[37].weather[0].icon + ".png");
            $("#forecast-temp-search-results5").text("Temp: " + data.list[37].main.temp + "°F");
            $("#forecast-wind-search-results5").text("Wind: " + data.list[37].wind.speed + " mph");
            $("#forecast-hum-search-results5").text("Humidity: " + data.list[37].main.humidity + "%");
        })
}

function updateHistory() {
    var searchInputVal = document.querySelector("#city-input").value;
    localStorage.setItem("city", searchInputVal);
    $("#historyList").append("<button>" + searchInputVal + "</button>");
    $("button").addClass("btn btn-secondary m-1");
    $("button").addClass("btn-" + searchInputVal);
}

var pastCity = localStorage.getItem("search")
$("#historyList").append("<button>" + pastCity + "</button>");
$("button").addClass("btn btn-secondary m-1");
$("button").addClass("btn-" + pastCity);

var historyBtn = $(".btn-" + pastCity);

btn.click(function () {
    getCityWeather();
    getForecast();
    updateHistory();
});

historyBtn.click(function () {
    var pastCity = localStorage.getItem("search")
    $("#city-input").val(pastCity);
    getCityWeather();
    getForecast();
});