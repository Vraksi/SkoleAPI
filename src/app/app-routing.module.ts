import { NgModule } from '@angular/core';
// routermodule og routes for at kunne lave og huske vores routes
import { Routes, RouterModule } from '@angular/router';

import { ManiDataComponent } from './mani-data/mani-data.component';
//"Redirect" redirecter den til vores start side, Vi skal dog lave vores start side og refere til den ellers kan den ikke finde den

const routes: Routes = [
  { path: '', redirectTo: 'mani-data', pathMatch: 'full' },
  { path: 'mani-data', component: ManiDataComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
