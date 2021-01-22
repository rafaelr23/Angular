import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              private _Router: Router
  ) { }

  ngOnInit(): void {
  }

buscarHeroe(termino:string){
  this._Router.navigate(['/busqueda',termino]);
}
}
