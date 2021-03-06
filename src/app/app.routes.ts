import { compileNgModuleFromRender2 } from "@angular/compiler/src/render3/r3_module_compiler";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';




const APP_ROUTES: Routes = [
    { path: 'home',component: HomeComponent},
    {path:'about',component:  AboutComponent},
    {path:'heroes',component: HeroesComponent},
    {path:'heroe/:id',component: HeroeComponent},
    {path:'busqueda/:heroe',component: BusquedaComponent},
    { path: '**', pathMatch: 'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);