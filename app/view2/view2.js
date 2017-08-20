'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.userService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$filter', '$timeout', 'userService', '$location', function ($scope, $filter, $timeout, userService, $location) {
    $scope.currentPage = 0;
    $scope.pageSize = 35;
    $scope.orderByField = 'id';
    $scope.reverseSort = false;
    $scope.option = [];
    $scope.selectedItem = [];
    $scope.message = '';
    $scope.data = userService.getUsers();
    
    $scope.data.forEach((element) => {
        $scope.option.push(element.hobby);
    });
    localStorage.setItem('data', JSON.stringify($scope.data));
    $scope.options = $scope.option.filter((item, pos) => $scope.option.indexOf(item) === pos);
    $scope.q = '';
    $scope.reload = function()
    {
        const allData = JSON.parse(localStorage.getItem('data'));
        $scope.data = allData;
    }
    $scope.selectOption = function(option)
    {
        const allData = JSON.parse(localStorage.getItem('data'));
        $scope.datas = allData.filter((item) => {
            return item.hobby === $scope.selectedHobby;
        });
        $scope.data = $scope.datas;
    }
    $scope.checkAll = function () {
        const newArray = [];
        angular.forEach($scope.data, function (item) {
            item.Selected = $scope.selectAll;
            newArray.push(item.id);
        });
        $scope.selectedItem = newArray;
    };
    $scope.deleteItem = function (id) {
        let x = document.getElementById("snackbar")
        x.className = "show";
        $scope.data = $scope.data.filter(elem => elem.id !== id);
        $scope.message = 'User was deleted successfully';
        $timeout(function(){
           x.className = x.className.replace("show", "");
        }, 2000);
    };
    $scope.selectOne = function (id) {
        if ($scope.selectedItem.includes(id)) {
            const index = $scope.selectedItem.indexOf(id);
            if (index > -1) {
                $scope.selectedItem.splice(index, 1);
            }
        } else {
            $scope.selectedItem.push(id);
        }
        $scope.selectAll = false;
    }
    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)
    }
    $scope.submit = function () {
        // $scope.$emit('submitItem', { selectedItem: $scope.selectedItem });
        if ($scope.selectedItem.length > 0) {
            userService.setItem($scope.selectedItem);
            $location.path('/view3');
        } else {
            let x = document.getElementById("snackbar")
            x.className = "show";
            $scope.message = 'No data was selected';
            $timeout(function(){
               x.className = x.className.replace("show", "");
            }, 2000);
        }
    }
    $scope.getNumber = function(num) {
        return new Array(num);
    }
    $scope.setPage = function(pageNum) {
        $scope.currentPage = pageNum;
    }
    $scope.numberOfPages=function(){
        $scope.totalPages = Math.ceil($scope.getData().length/$scope.pageSize);
        return $scope.totalPages;
    }
    if ($location.search().message) {
        let x = document.getElementById("snackbar")
        x.className = "show";
        $scope.message = $location.search().message;
        $timeout(function(){
           x.className = x.className.replace("show", "");
        }, 2000);
    }
}])
.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
