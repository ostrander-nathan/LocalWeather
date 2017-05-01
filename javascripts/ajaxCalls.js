"use strict";
var weatherAPI = (function(weatherCall) {

    weatherCall.getDayWeather = function(apiKeys, searchValue) {
        return new Promise((resolve, reject) => {
            // console.log("apiKeys",apiKeys );
            let keyHolder = apiKeys.APPID;
            console.log("keyHolder", keyHolder);
            $.ajax({
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&units=imperial&APPID=${keyHolder}`
            }).then((response) => {
                console.log("getDayWeather response", response);
                resolve(response);
            }, (error) => {
                reject(error);
            });

        });

    };
    weatherCall.getThreeDayWeather = function(apiKeys, searchValue) {
        return new Promise((resolve, reject) => {
            let key3Holder = apiKeys.APPID;
            console.log("key3Holder", key3Holder);
            $.ajax({
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${searchValue},us&units=imperial&cnt=3&APPID=${key3Holder}`
            }).then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });

        });
    };

    weatherCall.getSevenDayWeather = function(apiKeys, searchValue) {
        return new Promise((resolve, reject) => {
            let key4Holder = apiKeys.APPID;
            console.log("key4Holder", key4Holder);
            $.ajax({
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${searchValue},us&units=imperial&cnt=7&APPID=${key4Holder}`
            }).then((response) => {
                console.log("resolve from 7day ajax", response);
                resolve(response);
            }, (error) => {
                reject(error);
            });

        });
    };

    return weatherCall;
})(weatherAPI || {});
