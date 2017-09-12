'use strict';
(function(){

class VehiculosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('y')
  .component('vehiculosList', {
    templateUrl: '../y/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent
  });

})();
