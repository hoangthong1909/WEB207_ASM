const api = "http://localhost:3000/sv";

function registerController($scope, $http) {
  $scope.sv = { gender: "1" };

$scope.onFormSubmit = function (event) {
    event.preventDefault();
  }
    $scope.onInsert = function () {
      $scope.sv.id = null;
      if($scope.sv!=null){
      $http.post(api, $scope.sv)
        .then(function (response) {
          console.log(response);
         alert("Them Moi Thanh Cong");
        })
    }else{
        alert("Vui Long Nhap Lieu Tat Ca Thuoc Tinh Tren Form");
    }
}
}