import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any={}; //

  constructor(
                //Inicializacion de los Imports
                private _activateRouter:ActivatedRoute,
                private _heroesService:HeroesService,
                private _Router:Router
  ) {

    this._activateRouter.params.subscribe( params => { //Obserbable que obtiene los parametros de la URL ej: busqueda/:param
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
   }

  ngOnInit(): void {
  }
  
  regresarGaleria(){
    this._Router.navigate(['heroes']);
  }
}
