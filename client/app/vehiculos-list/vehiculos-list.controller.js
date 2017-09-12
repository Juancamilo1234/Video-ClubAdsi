'use strict';
(function(){

class VehiculosListComponent {
  constructor() {
    this.vehiculos = [
      {
      id : 1,
      marca: "Renault",
      descripcion :"modelo 2017 con caja automatica , 4 puertas ",
      valorAlquiler:200000,
      tipo:"mediano"
      },
      {
      id : 2,
      marca: "chevrolet",
      descripcion :"modelo 2016 con caja automatica , 4 puertas color negro  ",
      valorAlquiler:153000,
      tipo:"pequeño"
      },
      {
      id : 3,
      marca: "chevrolet",
      descripcion :"modelo 2017 con caja automatica , 4 puertas tracker  ",
      valorAlquiler:500000,
      tipo:"grande"
      },
      {
      id : 4,
      marca: "Porshe",
      descripcion :"modelo 2017 con caja automatica , 2 puertas ",
      valorAlquiler:700000,
      tipo:"mediano"
      },
      {
      id : 5,
      marca: "Toyota",
      descripcion :"modelo 2017 con caja automatica , 4 puertas ",
      valorAlquiler:60000,
       tipo:"grande"
      }
    ];
  }



  $onInit(){
    var porcentaje;
    var TotalAlquiler;
    var medianos;
    for (var i = 0 ; i < this.vehiculos.length ; i++) {
      porcentaje =this.vehiculos[i].valorAlquiler* 0.15
      TotalAlquiler= this.vehiculos[i].valorAlquiler + porcentaje;
      console.log(TotalAlquiler);

      if (this.vehiculos[i].tipo == "mediano") {
        this.vehiculos[i].descuento = this.vehiculos[i].valorAlquiler * 0.2;

        console.log(medianos);
      }

    }
  }
}

angular.module('videoClubApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs : 'vm'
  });

})();
