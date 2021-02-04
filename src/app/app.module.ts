import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Part4DirectivesComponent } from './pages/part4-directives/part4-directives.component';
import {RoutingModule} from './routing/routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StyleDirective } from './pages/part4-directives/directives/style.directive';
import { IfNotDirective } from './pages/part4-directives/directives/if-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    Part4DirectivesComponent,
    HomePageComponent,
    StyleDirective,
    IfNotDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
