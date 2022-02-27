
const api = "http://localhost:3000/sv";
function formController($scope, $http) {
  $scope.students = [];
  $scope.isLoading = false;
  $scope.isSuccess = false;
  $scope.message = "";
  $scope.index = -1;
  $scope.sv = { gender: "1" };


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

  function getapi() {
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
  }

  $scope.filltoForm = function (index) {
    Update = api + "/" + $scope.students[index].id;
    console.log(Update);
    $scope.index = index;
    $scope.sv = angular.copy($scope.students[index]);
    console.log($scope.students[index].id);
  }
  $scope.onInsert = function (event) {
    event.preventDefault();
    console.log($scope.sv);
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
            $scope.message = "Thêm mới thành công";
            $scope.isSuccess = true;
            getapi();
          })
      } else {
        alert("Mật Khẩu không trùng với Mật Khẩu Xác Nhận");
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin trên Form");
    }
  }
  $scope.onSubmitForm = function (event) {
    event.preventDefault();

    // Gửi 1 request POST tới API
    $http.post(api, $scope.sv)
      .then(function (response) {
        $scope.message = "Thêm mới thành công";
        $scope.isSuccess = true;
      });
  }

  $scope.onUpdate = function () {
    $http.put(Update, $scope.sv)
      .then(function (response) {
        console.log(response.data);
        $scope.message = "Sửa thành công";
        $scope.isSuccess = true;
      })
  }


  $scope.onDelete = function () {
    console.log(Update);
      if ($scope.sv.name == "Admin") {
        $scope.message="Bạn không thể xóa tài khoản Admin";
        $scope.isSuccess = true;
        return;
      } else {
        $http.delete(Update, $scope.sv)
          .then(function (response) {
            console.log(response)
            $scope.message = "Xoá thành công";
            $scope.isSuccess = true;
          })
    }
  }

  $scope.onClear = function () {
    $scope.index = -1;
    $scope.sv = { gender: "1" };
    $scope.message = "";
  }
}