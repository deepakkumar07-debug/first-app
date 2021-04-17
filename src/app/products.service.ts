
//when creating components we decorate ts class with component decorator

// but in angular we dont have decorator for services

// so services is essentially a plain js file

export class ProductsService{

    getProducts() {
        return ['Apple','mango','grape'];//imagine here we have logic for consuming http service
    }
}
// with this implementation we can reuse this logic in multiple places in our appplication

// and also this separate or decouple our component from this logic 

// now go to product component.ts
