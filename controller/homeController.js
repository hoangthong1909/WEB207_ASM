function homeController($scope,$http){
    const api ="http://localhost:3000/subject";
    $scope.subjects=[];
    $scope.page=0;
    $http.get(api)
    .then(function (response){
        $scope.subjects=response.data;
        $scope.count=$scope.subjects.length;
        // console(response.data)
    });
    $scope.check=function(){
        alert("Bạn không thể chuyển sang môn học khác khi đang làm Quiz ");
    }
}