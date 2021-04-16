import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating/rating.component';

// decorator @NgModule with this we convert our plain typescript class
// to a module from angular point of view

@NgModule({
  declarations: [
    //this is where we add all the components that are part of this module
    AppComponent,//this default on only one compo
    ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//the structure this default AppModule is exactly 
//what we have created in ProductsComponent