
const api = "http://localhost:3000/sv";
function formController($scope, $http) {
  $scope.students = [];
  $scope.isLoading = false;
  $scope.isSuccess = true;
  $scope.message = "";
  $scope.index = -1;
  $scope.sv = { gender: "1"};


  $scope.onFormSubmit = function (event) {
    event.preventDefault();
  }
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


  $scope.filltoForm = function (index) {
    Update = api + "/" + $scope.students[index].id;
    console.log(Update);
    $scope.index = index;
    $scope.sv = angular.copy($scope.students[index]);
    console.log($scope.students[index].id);
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
        $http.post(api, $scope.sv)
          .then(function (response) {
            console.log(response);
            $scope.message = "Thêm mới thành công";
            $scope.isSuccess = true;
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
    $scope.index = -1;
    $scope.sv = { gender: "1" };
  }
}