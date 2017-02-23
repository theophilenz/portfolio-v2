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
        comp: "HTML/CSS",
        niveau: "80%"
    }, {
        comp: "Javascript",
        niveau: "50%"
    }, {
        comp: "jQuery",
        niveau: "60%"
    }, {
        comp: "AngularJS",
        niveau: "20%"
    }];
    $scope.projets = [{
            client: "Zuo Design",
            src: "imgs/projets/zuo.png",
            services: ["WordPress", "cPanel"]
        },
        {
            client: "Meddexx",
            src: "imgs/projets/meddexx.png",
            services: ["WordPress", "Yo"]
        }
    ]
}]);