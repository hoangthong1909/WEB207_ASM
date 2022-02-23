function quesController($scope, $http) {
    const api = "http://localhost:3000/quizs";
    $scope.index = -1;
    $scope.indexCheckBox = 1;
    $scope.quizs = [];
    $scope.tab = 0;
    $http.get(api)
        .then(function (response) {
            $scope.quizs = response.data;
            console.log($scope.quizs);
        });
    $scope.onSelect = function (index) {
        console.log(index);
        $scope.index = index;
        $scope.quiz = angular.copy($scope.quizs[index]);
        console.log($scope.quizs[index])
        if ($scope.indexCheckBox = 1) {
            $scope.quiz.da1 = angular.copy($scope.quiz.da1);
        } else if ($scope.indexCheckBox = 2) {
            $scope.quiz.da2= angular.copy($scope.quiz.da2);
        } else if ($scope.indexCheckBox = 3) {
            $scope.quiz.da3= angular.copy($scope.quiz.da3);
        } else if ($scope.indexCheckBox = 4) {
            $scope.quiz.da4= angular.copy($scope.quiz.da4);
        }
    }

    $scope.click1 = function () {
        $scope.quiz.check = $scope.quiz.da1;
    }

    $scope.click2 = function () {
        $scope.quiz.da = $scope.quiz.da2;
    }

    $scope.click3 = function () {
        $scope.quiz.da = $scope.quiz.da3;
    }

    $scope.click4 = function () {
        $scope.quiz.da = $scope.quiz.da4;
    }


    $scope.onClear = function () {
        $scope.quiz = {};
        $scope.index = -1;
        $scope.indexCheckBox = 1;
    }

    $scope.onInsert = function () {
        $scope.onFormSubmit = function (event) {
            event.preventDefault();
          }
        $scope.quiz.id = null;
        if ($scope.quiz.check == null) {
            alert("Vui Lòng chọn đáp án đúng")
            return;
        }
        $http.post(api, $scope.quiz)
            .then(function (response) {
                console.log(response.data);
                alert("Thêm thành công!");
            });
    }
    $scope.onFormSubmit = function (event) {
        event.preventDefault();
      }

    $scope.onUpdate = function () {
        const apiUpdate = api + "/" + $scope.quiz.id;
        // $scope.quiz.id = null;
        $http.put(apiUpdate, $scope.quiz)
            .then(function (response) {
                $scope.tab=0;
                console.log(response.data);
                alert("Sửa thành công!");
            });
    }

    $scope.onDelete = function () {
        const apiDelete = api + "/" + $scope.quiz.id;
        $http.delete(apiDelete, $scope.quiz)
            .then(function (response) {
                console.log(response)
                alert("Xóa thành công!");
            });
    }

}