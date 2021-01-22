import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor( private _heoresService:HeroesService,
               private _Router: Router ) { 
    console.log("constructor");
   }

  ngOnInit(): void {
    this.heroes = this._heoresService.getHeroes();
    console.log(this.heroes)  ;
  
  }

  verHeroe( idx:number){
  this._Router.navigate(['/heroe',idx]);
  }

}
