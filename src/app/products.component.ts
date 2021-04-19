import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

//to make this class as component we use componnet decorator for that import

// this function taskes obj as argument so{}
@Component({
    // creating

    // we use one or more properties to tell how angular works
    
    // lselector property is ike querySelector or $('') we can pass id,class,element name...

    //we want< courses> component => selector :'courses' 

    // class selector :'.courses' 

    // selector :'#courses' 

    // In real world application our template can be several lines of code in that case we put them in a separate file
    
    selector: 'products',
    template: `<div>
                    <h1>{{"product " +productName}}</h1>
                    <p>{{getProductName()}}</p>
                    <ul>
                        <li *ngFor='let product of products'>
                            {{product}}
                        </li>
                    </ul>
                </div>`
    //displaying dynamically we use {{}} to render something dynamically evaluated at runtime 
    // value will be placed at runtime so the value of productName will placed in our dom
    // if value of the productName changes at some point in the future angular will
    // automatically updates the dom

    // this concept is called data binding so we are binding our view to have filled in this
    //component

    // whenever the value of that field changes the view is automatically notified and updated
})
export class ProductsComponent {
    //here we cant create variable using let const and var keywords but oustside we can
    productName = 'Apple';
    products;

    // injecting or providing dependecny of the class into its constructor
    constructor(service:ProductsService){//dependency
        //let service= new ProductsService();
        this.products = service.getProducts();
    }
    getProductName() {
        return this.productName;
    }
    //  A component should not include any logic other than presentation logic
    // now here we dont have any logic for consuming http service
    // now this allow us to unit test this class without dependency upon that http endpoint
}