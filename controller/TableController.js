
function tableController($scope, $rootScope, $http) {
  $scope.students = [];
  $scope.isLoading = false;
  $scope.login = false;
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
  if(sessionStorage.getItem('isLogin')){
  $scope.login = true;
  $scope.info=angular.fromJson(sessionStorage.getItem('isLogin')) //chuyen chuoi Json sang thanh doi Tuong
  }
  function checkLogin(name, password) {
    for (var i = 0; i < $scope.students.length; i++) {
      if (name == $scope.students[i].name &&
        password == $scope.students[i].pass) {
        if ($scope.students[i].isAdmin == "Admin") {
          window.location = "http://127.0.0.1:5501/admin.html";
        } else {
          window.location = "http://127.0.0.1:5501/home.html";
        }
        return $scope.students[i];
      }
    }
    return false;
  }
  $scope.isLogin = function () {
    var user = checkLogin($scope.user.name, $scope.user.password);
    console.log(user);
    if (user) {
      console.log(user);
      // luu thong tin vao sessionStorage
      sessionStorage.setItem('isLogin', angular.toJson(user)); //chuyen qua chuoi json
      $scope.login = true;
    } else {
      $scope.message = "Tên Tài Khoản Hoặc Mật Khẩu không chính xác";
      $scope.isSuccess = false;
      $scope.login = false;
    }
  }
  $scope.logout=function(){
    sessionStorage.removeItem('isLogin');
    $scope.login=false;

  }
  $scope.dmk=function(){
    $scope.login=true;
    sessionStorage.setItem('isLogin', angular.toJson(user)); //chuyen qua chuoi json
  }
  $scope.changePassword = function () {
    if($scope.isLogin==true){
    for (var i = 0; i < $scope.students.length; i++) {
      const UpdateMK = api + "/" + $scope.students[i].id;
      if ($scope.info.name == $scope.students[i].name && $scope.sv.pass == $scope.students[i].pass) {
        if ($scope.sv.pass1 == $scope.sv.pass2) {
          $scope.students[i].id = null;
          console.log($scope.students[i]);
          $http.put(UpdateMK, $scope.sv.pass)
            .then(function (response) {
              console.log(response.data);
              alert("Doi Mk Thanh Cong");
              return;
            })
        } else {
          alert("Mật khẩu không trùng với mật khẩu xác nhận ");
          return;
        }
      } else {
        alert("Mật Khẩu Hiện Tại Không Chính Xác");
        return;
      }
    }
  }else{
    alert("Vui Long Dang Nhap");
  }
  }
}
