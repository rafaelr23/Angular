import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  busqueda:any[]= [];//Array vacio
  termino: string;
  constructor(
              //Inicializando Servicios y Rutas
              private _heroeService: HeroesService,
              private _Router: Router,
              private _ActivatedRouter: ActivatedRoute
  ) { 
  

  }

  ngOnInit(): void {

    this._ActivatedRouter.params.subscribe(param =>{ //Se obtiene los parametros de la URL ej: busqueda/:heroe
      this.termino = param['heroe'] // El parametro de la URL(el heroe) se lo asiga a la variable termino
      this.busqueda = this._heroeService.buscarHeroes(param['heroe']); // se llama a la funcion buscarHeroe para cargar los heroes encontrados en el array
      console.log(this.busqueda); // Se muestran los resutados en la consola
    });
  }
  regresarGaleria(){
    this._Router.navigate(['heroes']);
  }
}
