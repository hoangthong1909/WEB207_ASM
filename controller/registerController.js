function registerController($scope, $http) {
    const api = "http://localhost:3000/sv"
    $scope.sv = {
        gender: 1,
        isAdmin: 0,
    }

    $scope.onRegister = function () {
        if ($scope.sv.fullname != null &&
          $scope.sv.name != null &&
          $scope.sv.email != null &&
          $scope.sv.pass != null &&
          $scope.sv.pass1 != null &&
          $scope.sv.address != null) {
          if ($scope.sv.pass == $scope.sv.pass1) {
            $scope.sv.id = null;
            $http.post(api, $scope.sv)
              .then(function (response) {
                console.log(response);
                alert("Đăng Kí Thành Công");
                window.location = "http://127.0.0.1:5501/index.html#/login";
              })
          } else {
            alert("Mật Khẩu không trùng với Mật Khẩu Xác Nhận");
          }
        } else {
          alert("Vui lòng điền đầy đủ thông tin trên Form");
        }
      }
}