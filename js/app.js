var app = angular.module('portfolioApp', ["ngRoute", 'angular-typed'])

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./vues/accueil.html",
            controller: "ControlleurPageAccueil"
        })
        .otherwise({
            redirectTo: "./"
        })

});

app.controller("ControlleurPageAccueil", ["$scope", function($scope) {
    $scope.competences = [{
            nom: "HTML/CSS"
        },
        {
            nom: "Javascript"
        },
        {
            nom: "AngularJS"
        },
        {
            nom: "jQuery"
        }
    ]
    $scope.projets = [{
            titre: "Zuo Design"
        },
        {
            titre: "Meddexx"
        }
    ]
}]);