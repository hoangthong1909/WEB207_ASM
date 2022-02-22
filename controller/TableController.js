
function tableController($scope, $rootScope, $http) {
  $scope.students = [];
  $scope.isLoading = false;
  $scope.isSuccess = true;
  $scope.message = "";
  //lấy data
  const api = "http://localhost:3000/sv";
  $scope.isLoading = true;
  $http.get(api) // Gửi 1 request GET tới API
    .then(function (response) { // Phản hồi của API
      $scope.students = response.data;
      console.log(response);
      $scope.isLoading = false;
    })
    .catch(function (error) {
      console.log(error);
      $scope.isLoading = false;
    });


  $scope.select = function (index) {
    apiUpdate = api + "/" + $scope.students[index].id;
    console.log(apiUpdate);
    $rootScope.index = index;
    $scope.$parent.sv = angular.copy($scope.students[index]);
    console.log($scope.students[index].id);
  }

  $scope.onDelete = function () {
    apiUpdate = api + "/" + $scope.students[index].id;
    console.log(apiUpdate);

  }

}

