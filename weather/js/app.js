'use strict';


var weatherApp = angular.module('weatherApp',[]);

weatherApp.controller('WeatherListControler', function WeatherListControler($scope) {
		
	$scope.hello = "Weather Forecast";
	
		 
	 $scope.api = {
 "query": {
  "count": 1,
  "created": "2017-05-05T03:52:45Z",
  "lang": "ru-RU",
  "results": {
   "channel": {
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "title": "Yahoo! Weather - Nome, AK, US",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
    "description": "Yahoo! Weather for Nome, AK, US",
    "language": "en-us",
    "lastBuildDate": "Thu, 04 May 2017 07:52 PM AKDT",
    "ttl": "60",
    "location": {
     "city": "Nome",
     "country": "United States",
     "region": " AK"
    },
    "wind": {
     "chill": "36",
     "direction": "225",
     "speed": "4"
    },
    "atmosphere": {
     "humidity": "69",
     "pressure": "1010.0",
     "rising": "0",
     "visibility": "16.1"
    },
    "astronomy": {
     "sunrise": "6:20 am",
     "sunset": "11:38 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Nome, AK, US at 07:00 PM AKDT",
     "lat": "64.499474",
     "long": "-165.405792",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "pubDate": "Thu, 04 May 2017 07:00 PM AKDT",
     "condition": {
      "code": "30",
      "date": "Thu, 04 May 2017 07:00 PM AKDT",
      "temp": "36",
      "text": "Partly Cloudy"
     },
     "forecast": [
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
     ],
     "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/30.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Partly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Sunny. High: 36Low: 22\n<BR /> Fri - Partly Cloudy. High: 38Low: 26\n<BR /> Sat - Cloudy. High: 47Low: 30\n<BR /> Sun - Partly Cloudy. High: 49Low: 39\n<BR /> Mon - Partly Cloudy. High: 45Low: 30\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
     "guid": {
      "isPermaLink": "false"
     }
    }
   }
  }
 }
}


$scope.location = $scope.api.query.results.channel.location;
$scope.forecast = $scope.api.query.results.channel.item.forecast;

console.log( Object.keys( $scope.api.query.results.channel.item ) );

});


