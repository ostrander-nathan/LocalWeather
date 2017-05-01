"use strict";
let apiKeys = {};

function putWeatherInDOM(searchValue) {
    weatherAPI.getDayWeather(apiKeys, searchValue).then(function(items) {
        console.log("items from weather call in ajaxCalls.js", items);
        let newListItem = "";
        newListItem += `<div class="col-xs-8"><h4>${items.name}</h4></div>`;
        newListItem += `<div class="col-xs-8"><label>Current Temperature: </label>${items.main.temp}°</div>`;
        newListItem += `<div class="col-xs-8"><label>Current Pressure: </label>${items.main.pressure}mb</div>`;
        newListItem += `<div class="col-xs-8"><label>Current Wind Speed: </label>${items.wind.speed}mph</div>`;
        $('.output').append(newListItem);
        $('#submitZip').prop("disabled", true);
        $("#day3Button").removeClass("hide");
        dayThreeForcast(apiKeys, searchValue);
    });
}

function putThreeDayInDOM(searchValue) {
    weatherAPI.getThreeDayWeather(apiKeys, searchValue).then(function(items) {
        console.log("items from weather call in ajaxCalls.js", items);
        let newListItem = "";
        newListItem += `<div class="row">`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><h4>${items.city.name}</h4></div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Temperature:</label> ${items.list[0].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Pressure:</label> ${items.list[0].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Wind Speed:</label> ${items.list[0].speed}mph</div>`;
        newListItem += `</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Temperature:</label> ${items.list[1].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Pressure:</label> ${items.list[1].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Wind Speed:</label> ${items.list[1].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Temperature:</label> ${items.list[2].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Pressure:</label> ${items.list[2].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Wind Speed:</label> ${items.list[2].speed}mph</div>`;
        $('.output').append(newListItem);
        $('#submitZip').prop("disabled", true);
        $('#day3Button').prop("disabled", true);
        $("#day7Button").removeClass("hide");
        daySevenForcast(apiKeys, searchValue);
    });
}

function putSevenDayInDOM(searchValue) {
    weatherAPI.getSevenDayWeather(apiKeys, searchValue).then(function(items) {
        console.log("items from weather call in ajaxCalls.js", items);
        let newListItem = "";
        newListItem += `<div class="row">`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><h4>${items.city.name}</h4></div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Temperature:</label> ${items.list[0].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Pressure:</label> ${items.list[0].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 1 Wind Speed:</label> ${items.list[0].speed}mph</div>`;
        newListItem += `</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Temperature:</label> ${items.list[1].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Pressure:</label> ${items.list[1].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 2 Wind Speed:</label> ${items.list[1].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Temperature:</label> ${items.list[2].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Pressure:</label> ${items.list[2].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 3 Wind Speed:</label> ${items.list[2].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 4 Temperature:</label> ${items.list[3].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 4 Pressure:</label> ${items.list[3].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 4 Wind Speed:</label> ${items.list[3].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 5 Temperature:</label> ${items.list[4].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 5 Pressure:</label> ${items.list[4].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 5 Wind Speed:</label> ${items.list[4].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 6 Temperature:</label> ${items.list[5].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 6 Pressure:</label> ${items.list[5].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 6 Wind Speed:</label> ${items.list[5].speed}mph</div>`;
        newListItem += `<br>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 7 Temperature:</label> ${items.list[6].temp.day}°</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 7 Pressure:</label> ${items.list[6].pressure}mb</div>`;
        newListItem += `<div class=".col-xs-6 .col-md-4"><label>Day 7 Wind Speed:</label> ${items.list[6].speed}mph</div>`;
        $('.output').append(newListItem);
        $("#day7Button").prop("disabled", true);
        $("#reset").removeClass("hide");
        resetZip();
    });
}
// GETTING KEYS FROM WEATHERIIFE 
$(document).ready(function() {
    weatherAPI.weatherCredentials().then(function(keys) {
        apiKeys = keys;
    });
});

function checkZipCode(searchValue) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(searchValue);
}

$('#submitZip').on('click', function() {
    var searchValue = $('#zipCode').val();
    if (checkZipCode(searchValue)) {
        $(this).css('color', 'green').html("Valid Zip Code");
        putWeatherInDOM(searchValue);
    } else {
        $(this).css('color', 'red').html("Invalid Zip Code");
    }
});

function dayThreeForcast(apiKeys, searchValue) {
    $('#day3Button').on('click', function() {
        $(this).css('color', 'purple');
        $(".output").empty().append();
        putThreeDayInDOM(searchValue);
    });
}

function daySevenForcast(apiKeys, searchValue) {
    $('#day7Button').on('click', function() {
        $(this).css('color', 'yellow');
        $(".output").empty().append();
        console.log("apiKeys", apiKeys);
        putSevenDayInDOM(searchValue);
    });
}

function resetZip() {
    $("#reset").on("click", function() {
        $("#submitZip").prop("disabled", false);
        $("#day3Button").addClass("hide");
        $("#day3Button").prop("disabled", false);
        $("#day7Button").addClass("hide");
        $("#day7Button").prop("disabled", false);
        $("#reset").addClass("hide");
        $('.output').empty();
        $('#zipCode').val("");

        checkZipCode();
    });
}
