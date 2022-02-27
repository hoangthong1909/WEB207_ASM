var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/home", {
            templateUrl: 'router/home.html',
            controller: 'homeController'
        })
        .when("/qiz", {
            templateUrl: 'router/qiz.html',
            controller: 'quizController'
        })
        .when("/contact", {
            templateUrl: 'router/contact.html',
        })
        .when("/feedback", {
            templateUrl: 'router/feedback.html',
        })
        .when("/qa", {
            templateUrl: 'router/QA.html'
        })
        .when("/introduce", {
            templateUrl: 'router/introduce.html'
        })
        .when("/login", {
            templateUrl: 'router/login.html',
            controller: "loginController"
        })
        .when("/register", {
            templateUrl: 'router/register.html',
            controller: "registerController"
        })
        .when("/updateinfo", {
            templateUrl: 'router/updateinfo.html',
        })
        .when("/changepassword", {
            templateUrl: 'router/changepassword.html',
        })
        .when("/user", {
            templateUrl: 'router/usermanager.html',
            controller: 'FormController'
        })
        .when("/question", {
            templateUrl: 'router/quesmanager.html',
            controller: 'quesController'
        })
        .when("/register", {
            templateUrl: 'router/register.html',
            controller: 'registerController'
        })
});
app.controller("indexController", indexController);
app.controller("homeController", homeController);
app.controller("quizController", quizController);
app.controller("loginController", loginController);
app.controller("registerController", registerController);
app.controller("FormController", formController);
app.controller("quesController", quesController);



