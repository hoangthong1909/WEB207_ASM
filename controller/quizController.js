function quizController($scope,$location, $http) {
    $scope.quizs = [];
    $scope.start = 0;
    $scope.check = false;
    $scope.goto =function(path){
        $location.path(path);
    }

    const api = "http://localhost:3000/quizs";
    $http.get(api)
        .then(function (response) {
            $scope.quizs = response.data;
            console.log($scope.quizs);
        });
        $scope.final=function(){
            alert("Bạn Đã Trượt");
         $scope.goto("home");
        }
        
}