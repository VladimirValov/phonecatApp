'use strict';


var weatherApp = angular.module('weatherApp',[]);

weatherApp.controller('WeatherListControler', function WeatherListControler($scope) {
		
	$scope.hello = "Weather Forecast";
	
	$scope.forecasts = [
      {
       "code": "32",
       "date": "04 May 2017",
       "day": "Thu",
       "high": "36",
       "low": "22",
       "text": "Sunny"
      },
      {
       "code": "30",
       "date": "05 May 2017",
       "day": "Fri",
       "high": "38",
       "low": "26",
       "text": "Partly Cloudy"
      },
      {
       "code": "26",
       "date": "06 May 2017",
       "day": "Sat",
       "high": "47",
       "low": "30",
       "text": "Cloudy"
      },
      {
       "code": "30",
       "date": "07 May 2017",
       "day": "Sun",
       "high": "49",
       "low": "39",
       "text": "Partly Cloudy"
      },
      {
       "code": "30",
       "date": "08 May 2017",
       "day": "Mon",
       "high": "45",
       "low": "30",
       "text": "Partly Cloudy"
      },
      {
       "code": "32",
       "date": "09 May 2017",
       "day": "Tue",
       "high": "39",
       "low": "25",
       "text": "Sunny"
      },
      {
       "code": "30",
       "date": "10 May 2017",
       "day": "Wed",
       "high": "39",
       "low": "29",
       "text": "Partly Cloudy"
      },
      {
       "code": "28",
       "date": "11 May 2017",
       "day": "Thu",
       "high": "43",
       "low": "34",
       "text": "Mostly Cloudy"
      },
      {
       "code": "30",
       "date": "12 May 2017",
       "day": "Fri",
       "high": "53",
       "low": "32",
       "text": "Partly Cloudy"
      },
      {
       "code": "32",
       "date": "13 May 2017",
       "day": "Sat",
       "high": "56",
       "low": "42",
       "text": "Sunny"
      }
     ];	 
    
});
