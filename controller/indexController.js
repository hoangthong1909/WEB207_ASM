function indexController($scope, $rootScope, $http) {
    $rootScope.login = false;
    console.log($rootScope.isLogin);

    $scope.logout = function () {
        sessionStorage.removeItem('isLogin');
        $rootScope.login = false;

    }
    if (sessionStorage.getItem('isLogin')) {
        $rootScope.login = true;
        $rootScope.info = angular.fromJson(sessionStorage.getItem('isLogin')) //chuyen chuoi Json sang thanh doi Tuong
    }

    $scope.updateInfo = function () {
        const Updateinfo = api + "/" + $rootScope.info.id;
        $http.put(Updateinfo, $rootScope.info)
            .then(function (response) {
                console.log(response.data);
                alert("Cập Nhật Thành Công , Vui lòng đăng nhập lại");
                sessionStorage.removeItem('isLogin');
                $rootScope.login = false;
                window.location = "http://127.0.0.1:5501/index.html#/login";
            })
    }
    $scope.changePassword = function () {
        $scope.sv = {};
        const UpdateMK = api + "/" + $rootScope.info.id;
        console.log(UpdateMK);

        if ($scope.sv.pass1 == $scope.sv.pass2) {
            $http.put(UpdateMK, $scope.sv)
                .then(function (response) {
                    console.log(response.data);
                    alert("Đổi Mật Khẩu Thành Công");
                    return;
                })
        } else {
            alert("Mật khẩu không trùng với mật khẩu xác nhận ");
            return;
        }

    }


}
