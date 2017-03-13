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
        niveau: "80%"
    }, {
        comp: "jQuery",
        niveau: "60%"
    }, {
        comp: "AngularJS",
        niveau: "60%"
    }, {
        comp: "MongoDB",
        niveau: "40%"
    }, {
        comp: "NodeJS, Express",
        niveau: "50%"
    }];
    $scope.projets = [{
            client: "Zuo Design",
            src: "imgs/projets/zuo.png",
            services: ["WordPress", "cPanel", "Hébergement"],
            lien: "/#!/"
        },
        {
            client: "Meddexx",
            src: "imgs/projets/meddexx.png",
            services: ["WordPress", "Logo", "Hébergement"],
            lien: "/#!/"
        }
    ]
}]);