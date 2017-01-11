var app = angular.module('portfolioApp', ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./vues/accueil.html",
            controller: "ControlleurPageAccueil"
        })
        .when("/outils", {
            templateUrl: "./vues/outils.html",
            controller: "ControlleurPageOutils"
        })
        .when("/projets", {
            templateUrl: "./vues/projets.html",
            controller: "ControlleurPageProjets"
        })
        .when("/demande-cv", {
            templateUrl: "./vues/demande-cv.html",
            controller: "ControlleurPageCV"
        })
        .otherwise({
            redirectTo: "./"
        })

});

app.controller("ControlleurPageAccueil", ["$scope", function($scope) {
    $scope.titre = "Je suis Théophile Nzungize";
    $scope.sousTitre = "Je fais du développement, du design et du marketing web.";
}]);

app.controller("ControlleurPageOutils", ["$scope", function($scope) {
    $scope.titre = "Mes outils de travail";
}]);

app.controller("ControlleurPageProjets", ["$scope", function($scope) {
    $scope.titre = "Mes projets";
}]);

app.controller("ControlleurPageCV", ["$scope", function($scope) {
    $scope.titre = "Demande de C.V";
}]);