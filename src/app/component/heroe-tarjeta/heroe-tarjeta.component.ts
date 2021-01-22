import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  // Variables Input, variables que ingresan datos(del Padre al Hijo)
  @Input() heroe:any = {};
  @Input() index:number;

  //Variables Output para exportar datos(Del hijo al Padre)

  @Output() verMas: EventEmitter<number>; // Creacion de variabe Tipo Evento verMas va a contener un nuero


  constructor(
              //Se inicializan los Servicios y Imports
              private _Router: Router
              ) { 
                this.verMas = new EventEmitter;// Se inicializa el nuevo evento que va a contener un nuevo numero
              }

  ngOnInit(): void {
  }
  verHeroe(){
    this._Router.navigate(['/heroe',this.index]); //Redirecion a una RUTA especifica
    // this.verMas.emit(this.index);
  }
}
