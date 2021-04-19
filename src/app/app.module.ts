import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating/rating.component';
import { ProductsService } from './products.service';

// decorator @NgModule with this we convert our plain typescript class
// to a module from angular point of view
// to define a module we use ngModule
@NgModule({
  declarations: [//array of components our new component will be referenced here
    //this is where we add all the components that are part of this module
    AppComponent,//this default on only one compo
    ProductsComponent, RatingComponent
  ],
  imports: [//array of modules
    BrowserModule //here comes the modules which are not in angular code module we are dependent with
  ],
  providers: [
    //in this array we need to register all the dependecies that components in this module dependent upon
    ProductsService
  ],
  bootstrap: [AppComponent] // a technique of loading a program into a computer by means of a few 
  //initial instructions which enable the introduction of the rest of the program 
  //from given args
})
export class AppModule { }

//the structure this default AppModule is exactly 
//what we have created in ProductsComponent