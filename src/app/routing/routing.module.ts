import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Part4DirectivesComponent} from '../pages/part4-directives/part4-directives.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'p4', component: Part4DirectivesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
