function loginController($scope, $rootScope, $http,$location) {
    $scope.students = [];
    $scope.goto =function(path){
        $location.path(path);
    }
    $scope.message="";
    const api = "http://localhost:3000/sv";
    $http.get(api) // Gửi 1 request GET tới API
        .then(function (response) { // Phản hồi của API
            $scope.students = response.data;
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    function checkLogin(name, password) {
        for (var i = 0; i < $scope.students.length; i++) {
            if (name == $scope.students[i].name &&
                password == $scope.students[i].pass) {
                if ($scope.students[i].isAdmin == "Admin") {
                    $scope.goto("user");
                   
                } else {
                    $scope.goto("home");
                }
                return $scope.students[i];
            }
        }
        return false;
    }
    $scope.isLogin = function () {
        var user = checkLogin($scope.user.name, $scope.user.pass);
        console.log(user);
        if (user) {
            console.log(user);
            $http.get(api) // Gửi 1 request GET tới API
                .then(function (response) { // Phản hồi của API
                    $scope.students = response.data;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            // luu thong tin vao sessionStorage
            sessionStorage.setItem('isLogin', angular.toJson(user)); //chuyen qua chuoi json
            $rootScope.login = true;
        } else {
            $scope.message = "Tên Tài Khoản Hoặc Mật Khẩu không chính xác";
            $rootScope.login = false;
        }
    }

}