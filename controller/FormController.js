
const api1 = "http://localhost:3000/sv";
function formController($scope, $rootScope, $http) {
  $rootScope.index = -1;
  $rootScope.sv = { gender: "1" };

  $scope.onFormSubmit = function (event) {
    event.preventDefault();
  }
  $scope.onInsert = function () {
    console.log($scope.sv);
    if ($scope.sv.fullname != null &&
      $scope.sv.name != null &&
      $scope.sv.email != null &&
      $scope.sv.pass != null &&
      $scope.sv.pass1 != null &&
      $scope.sv.address != null) {
      if ($scope.sv.pass == $scope.sv.pass1) {
        $scope.sv.id = null;
        $http.post(api1, $scope.sv)
          .then(function (response) {
            console.log(response);
            $scope.message = "Thêm mới thành công";
            $rootScope.isSuccess = true;
            alert("Thêm Mới Thành Công");
          })
      } else {
        alert("Mật Khẩu không trùng với Mật Khẩu Xác Nhận");
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin trên Form");
    }
  }

  $scope.onUpdate = function () {
    $http.put(Update, $scope.sv)
      .then(function (response) {
        console.log(response.data);
        alert("Sửa Thành Công");
      })
  }


  $scope.onDelete = function () {
    console.log(Update);
    $http.delete(Update, $scope.sv)
      .then(function (response) {
        console.log(response)
        alert("Xóa Thành Công");
      })
  }

  $scope.onClear = function () {
    $rootScope.index = -1;
    $rootScope.sv = { gender: "1" };
  }
}