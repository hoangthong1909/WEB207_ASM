

function changePassword($scope, $rootScope, $http) {
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
      $scope.onUpdate = function () {
        const id = $scope.students[index].id;
        const updateMKAPI = api + '/' + id;
        $scope.sv.id = null;
        $http.put(apiUpdate, $scope.sv)
          .then(function (response) {
            console.log(response.data);
          })
      }
  }
  
  