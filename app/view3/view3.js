'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
    $scope.currentBundle = [];
    $scope.selectedBundle = '';
    $scope.currentHotfix = [];
    $scope.selectedHotfix = '';
    $scope.allBundles = [
      {
          id: 1,
          name: 'Bundle 1',
          description: 'a little description about bundle 1'
      },
      {
          id: 2,
          name: 'Bundle 2',
          description: 'a little description about bundle 2'
      },
      {
          id: 3,
          name: 'Bundle 3',
          description: 'a little description about bundle 3'
      },
      {
          id: 4,
          name: 'Bundle 4',
          description: 'a little description about bundle 4'
      },
      {
          id: 5,
          name: 'Bundle 5',
          description: 'a little description about bundle 5'
      },
      {
          id: 6,
          name: 'Bundle 6',
          description: 'a little description about bundle 6'
      }
  ];
  $scope.allHotfixs = [
    {
        id: 1,
        name: 'Hotfix 1',
        description: 'a little description about Hotfix 1'
    },
    {
        id: 2,
        name: 'Hotfix 2',
        description: 'a little description about Hotfix 2'
    },
    {
        id: 3,
        name: 'Hotfix 3',
        description: 'a little description about Hotfix 3'
    },
    {
        id: 4,
        name: 'Hotfix 4',
        description: 'a little description about Hotfix 4'
    },
    {
        id: 5,
        name: 'Hotfix 5',
        description: 'a little description about Hotfix 5'
    },
    {
        id: 6,
        name: 'Hotfix 6',
        description: 'a little description about Hotfix 6'
    }
];
  $scope.selectOption = function () {
    const id = parseInt($scope.selectedBundle, 10);
    $scope.currentBundle = $scope.allBundles.filter((bundle) => bundle.id == id);
  };
  $scope.selectHotfix = function () {
    const id = parseInt($scope.selectedHotfix, 10);
    $scope.currentHotfix = $scope.allHotfixs.filter((hotfix) => hotfix.id == id);
  };
}]);
