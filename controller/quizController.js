function quizController($scope, $rootScope, $http) {
    $scope.quizs = [];
    $scope.start = [];
    $scope.check = false;

    $scope.start = function () {
        console.log($scope.isLogin);
        if ($scope.isLogin == false) {
            alert("Vui lòng đăng nhập!");
            return;
        }
        $scope.check = false;
        $scope.baiLam = []
    }

    const api = "http://localhost:3000/quizs";
    $http.get(api)
        .then(function (response) {
            $scope.quizs = response.data;
            for(i=1;i<$scope.quizs;i++){
            $scope.start ++;
            }
            console.log($scope.quizs);
        });
        
}