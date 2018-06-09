'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  // 'chart.js'
])
.directive("importSheetJS",[SheetJSImportDirective])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


function SheetJSImportDirective() {
  return {
    scope: { opts: '=' },
    link: function ($scope, $elm) {
      $elm.on('change', function (changeEvent) {
        var reader = new FileReader();

        reader.onload = function (e) {
          debugger;
          /* read workbook */
          var bstr = e.target.result;
          var workbook = XLSX.read(bstr, {type:'binary'});

          /* DO SOMETHING WITH workbook HERE */
          console.log('This works');
        };

        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
    }
  };
}
