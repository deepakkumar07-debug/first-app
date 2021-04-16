import { Component } from "@angular/core";

//to make this class as component we use componnet decorator for that import

// this function taskes obj as argument so{}
@Component({
    // creating

    // we use one or more properties to tell how angular works
    
    // like querySelector or $('') we can pass id,class,element name...

    //we want< courses> component => selector :'courses' 

    // class selector :'.courses' 

    // selector :'#courses' 

    // In real world application our template can be several lines of code in that case we put them in a separate file
    
    selector: 'products',
    template: '<h1>Products</h1>'
})
export class ProductsComponent {
    
}