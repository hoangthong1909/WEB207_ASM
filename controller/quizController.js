function quizController($scope, $rootScope, $http) {
    $scope.quizs = [];
    $scope.start = 0;
    $scope.check = false;

    const api = "http://localhost:3000/quizs";
    $http.get(api)
        .then(function (response) {
            $scope.quizs = response.data;
            console.log($scope.quizs);
        });
        $scope.final=function(){
            alert("Bạn Đã Trượt");
          window.location = "http://127.0.0.1:5501/index.html#/home";
        }
        
}