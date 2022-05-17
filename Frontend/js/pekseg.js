var app = new angular.module('pekseg', ['ngRoute']);

app.run(function($rootScope, $locale) {
    $locale.NUMBER_FORMATS.GROUP_SEP = ".";
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";

    $rootScope.title = 'Házi pékség';
    $rootScope.subtitle = 'Szoftverfejlesztő és tesztelő Vizsgafeladat';
    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.author = 'Lázár Adrián'
    $rootScope.penznem = 'Ft'

    $rootScope.rendelesek = [];
    if (sessionStorage.getItem('peksegUser')) {
        $rootScope.loggedIn = true;
        $rootScope.loggedUser = angular.fromJson(sessionStorage.getItem('peksegUser'));
    } else {
        $rootScope.loggedIn = false;
        $rootScope.loggedUser = "";
    }
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/termeklista.html",
        controller: "productCtrl"
    })
    .when("/reg", {
        templateUrl: "views/regisztracio.html",
        controller: "loginCtrl"
    })
    .when("/kosar", {
        templateUrl: "views/kosar.html",
        controller: "cartCtrl"
    })
    .when("/felhasznalok", {
        templateUrl: "views/felhasznalok.html",
        controller: "userCtrl"
    })
    .when("/rendelesek", {
        templateUrl: "views/rendelesek.html",
        controller: "orderCtrl"
    })
    .when("/stat", {
        templateUrl: "views/statisztika.html",
        controller: "statCtrl"
    })
});