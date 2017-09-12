'use strict';
(function(){

class VehiculosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('s')
  .component('vehiculosList', {
    templateUrl: '../s/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent
  });

})();
