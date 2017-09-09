/**
 * Created by jake on 9/5/2017.
 */
var app = angular.module("weatherExercise", []);


app.controller("weatherController", function ($scope, $http){
    $scope.submitCity = function() {
        var cityInput = $scope.inputCity;
        $scope.inputCity = $scope.inputCity;
        $scope.city = cityInput;
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&APPID=11a7bbce679b9b94fd89fc8eb8b4f5c0")
            .then(function (response) {
                $scope.descriptions = response.data;
                var temp=$scope.descriptions.main.temp;
                var ctemp=temp -273;
                $scope.temperature=ctemp.toFixed(2) +"°C";
                var wind=$scope.descriptions.wind.speed;
                $scope.wind=wind + "kph";
                var humidity=$scope.descriptions.main.humidity;
                $scope.humidity= humidity +"%";
            });
    };
});




