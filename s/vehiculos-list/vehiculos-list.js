'use strict';

angular.module('s')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos-list', {
        url: 's',
        template: '<vehiculos-list></vehiculos-list>'
      });
  });
