# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Installing Angular CLI
https://angular.io/cli

    npm install -g @angular/cli


    ng new first-app
    ls
    first-app
    cd first-app
    code .
    ng serve

## Workspaces and project files

- The `ng new` command creates an Angular workspace folder and generates a new app skeleton. 

https://angular.io/guide/file-structure
https://angular.io/guide/glossary#workspace
https://angular.io/guide/workspace-config

when we do ng serve
it generate bundles for javascript and css files
main.bundle.js
styles.bundle.js

## file structure
1. e2e
    where we write our end-to-end tests for our application which means thease are basically automated tests simulate a real user we can write code to launch our browser navigate to home page of our application

    - click a few links here and there fill out a form click a button
    - and assert that there is something on the page

2. node modules
    this is where we store all the third party that our application may be depended upon this folder is purely for development
    - so when we compiler our application parts of these are put in bundle and depl;oyed with our application
    - we're not going to deploy this node modules to the server

3. src
    - src stands for source this is where we have a actual source code of our application inside we have

    - `app` folder inside this folder we have  module and a component
    names with modules are module component are component

    - every application has atleast one module and one component

    - `src\app\assets` below that we have assets folder this is where we store all static assets of our application
    examples images,icons..
    - `src\app\environments` below that we have environments folder this is where we store configureation settings for different environments
    
    * one for production environment  =>`environment.prod.ts`
    * other for development environment =>`environment.ts`

    - other files in src folder are `favicon.ico` which is displayed in the browser
    - and we have index.html
            note here in `index.html` we dont have scripts or style references these references will be dynamically inserted into this page

    - we have `main.ts` which is a typescript file this is basically a starting point of our application here we are bootstarpping our main module which is APPModule
    unlike other programming language we have this main method
    - we have `polyfill.ts` which basically imports some scripts which are required for running angular because the angular framework uses feautures of javascript that are not available of current version of javascript supported by most browser out there so these polyfills fill the gap between feautures of javascript and angular needs and the feautures supported by the current browsers.
    - we have `styles.css` which is a global styles for our application and also each page or each component as it own styles
    - we have `test.ts` which is basically used for setting up of testing environment.

now outside of src folder

4. `angular-cli.json` project-specific configuration defaults for build and development tools provided by the Angular CLI
 when we do ng new projectName => this command will create folder with all required components. and this file denotes how our project folder structure should be where to begin all configuartion are writtten in this file as json format.

5. `.editorconfig` we have this file if we working on a team all developers in the team use the same settings in thier editors this where we store settings

6. `.gitignore` for excluding certain files and folders from git repository (right now just ignore )

7.  `karma.conf.js`
        which is a configuration for karma which is a test runner for javascript code we dont worry about that until we run any testcases

8. `package.json` important file
    this is a standard file that every node project has inside this file we have "dependencies": which determines libraries that our application is dependent upon

    all libraries are start with @angular/libraryName if we not use any of these we can delete it

    and another one is devDependencies these libraries purely for development machine we dont need this for production server 

    karma is a test runner

9. `protractor.config.js`
        basically a tool for running end-to-end tests for angular we dont worry about this


10. `tsconfig.json`
        bunch of settings for our typescript compiler so your typescript compiler looks at these settings based on these settings is going to compile our typescript code into javascript that browsers can understand
            **"target":"es2015"**
        - in future we want change our typescript compiler this whewre we change

11. `tslint.json`
    number of settings for tslint. tslint is a static analysis tool for typeScript code. it checks our typescript code for readability maintainability and functionality errors


12. 

The difference is that `tsconfig.app.json `is a file that is related to the Angular App in particular, while `tsconfig.json `is a more general file that contains general typescript configuration. It's especially useful when you have a micro frontends system, where there are multiple Angular subprojects, each of them with its own tsconfig.app.json configuration. But if you want you could perfectly merge these two files into one, actually you surely noticed that tsconfig.app.json contains the line:

  "extends": "./tsconfig.json"

which means that the whole App uses the configuration stated in tsconfig.app.json plus the configuration in tsconfig.json

https://stackoverflow.com/questions/54898013/difference-between-tsconfig-json-and-tsconfig-app-json-files-in-angular

13. `tsconfig.spec`
    It is TypeScript configuration for the application tests.

    For example below code you says

"types": ["jasmine", "node"]
I will use jasmine for testing on nodejs environment.



# webpack
Angular cli uses a tool called web pack which is build automation tool it gets all our stylesheets combines them in a bundle and minify that bundle and this is for optimization
example =>  polyfills.bundle.js
            mainbundle => all our source code
            stylesbundle   => all of our stylesheets bundles in js file
            vendor.bundle.js =>all of our third party libraries

            above standard followed till angualar 4 after some version in 9 uses module system 
            <script src="runtime.js" type="module"></script><script src="polyfills.js" type="module"></script><script src="styles.js" type="module"></script><script src="vendor.js" type="module"></script><script src="main.js" type="module"></script></body>


**whenever we change on of our files stylesheet or typescript file or html file webpack automatically refreshes our application and refreshes our bundles(compiled succesfully)**

which is feauture of web pack called **Hot Module Replacement(HMR) or Hot Module Reloading**


when we view page source all the bundles webpack generated injected in index.html file inside script tags

## Angular Version History
Angularjs (1) built with js
Angular framweork built with ts
2.0 2.1 2.2 2.3 then sudden angular 4 came out

why it happened 
angular consists of few different libraries distributed as npm packages
@angular/core   2.3.0
@angular/compiler   2.3.0
@angular/http   2.3.0
@angular/router 3.3.0

- now all these libraries were version the same except the router library
- In order to align these versions and avoid confusion in the future angular team decided to go staright to an angular version 4
its not major update its simply as 2.4

to avoid confusion in angular versions they drop the version suffix


## TypeScript
TypeScript is not a entirely new language its a superset of javascript so that means any valid js code is also valid ts code
- but typescript has additional feautures that current versions of js do not supported by most browsers

- In typeScript we have stong or static typing example c# java when we define a variable specify the type of variable in typescript its optional but this feauture makes our application more predictable and it also makes easdier to debug them when something goes wrong

- typscript also brings a few object oriented feautures that we missed in js
    - classes
    - interfaces
    - constructors
    - access modifiers
    - public and private
    - fields properties
    - generics
- with typescript we can catch errors at compile-time instead of at  run-time of not all kinds of errors

## Components
the heart of every angular apps we have one or more components
in real world apps we have tens or more numbers of components

    component encapsulates the data and the HTMl markup and logic for view which is the area of the screen users sees
        DATA HTML TEMPLATE LOGIC

    every application has atleast one component in real world angular app essentially tree of components starting from root component or app component


## modules
    module is a container for a group of related components every angular app has atleast one module which we called as app module
    - as application grows we may want to break that module into more maintainable modules
    - each module is responsible for specific are of our application

    - in ts each file is module  and private to that file obnly to gain acces we need to export it we can export class variables methods anything
    
    There are two types of exports:

    1. Named Exports (Zero or more exports per module)
    2. Default Exports (One per module)


## creating components
1. create a component
2. Register it in a module
3. Add an element in HTML markup

1. creating `src\app` inside
    * courses.component.ts
    * component has multiple words separate by hyphens
    * then create typescript class
    pascal naming convention
    in order to angular to see this class we need to export it

    ```js
    export class CoursesComponent{

    }
    ```

    - In order to convert this typescript class into component we need to add some metadata to it that angular understands it we use decorator to achieve this in angular

    In angular we have decorator called component that we can attach to a class make the class a component

    `app\products.component.ts`

    ```js
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
    ```
2. step register this component in a module now currently our application has only one module which is app module.


    ```js
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';

        import { AppComponent } from './app.component';
        import { ProductsComponent } from './products.component';

        // decorator @NgModule with this we convert our plain typescript class
        // to a module from angular point of view

        @NgModule({
        declarations: [
            //this is where we add all the components that are part of this module
            AppComponent,//this default on only one compo
            ProductsComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
         //the structure this default AppModule is exactly 
        //what we have created in ProductsComponent

        export class AppModule { 
            
        }
    ```

3. now we have created `ProductsComponent` at step 1 which means anywhere we have 
an element like Products angular will render the template `<h2>Products</h2>`

- But where are we going to add this element
- navigate to app folder there we have `app.component.html` file.
- this is the external template for our app compo

## <app-root>
we are not created yet this component
    naviagte to index.html inside the body element we have an element called app-root


## generate component using angular cli

    why because lot of boiler code if we unfortunately skipped any step there will be error

    `ng g c componentName` => g-generate c=> component

**example** 
            ng g c ratings

- this will create a folder inside `src/app/course/` add four files

        [deepak@Deepak first-app]$ ng g c rating
        CREATE src/app/rating/rating.component.css (0 bytes)
        CREATE src/app/rating/rating.component.html (21 bytes)
        CREATE src/app/rating/rating.component.spec.ts (628 bytes)
        CREATE src/app/rating/rating.component.ts (275 bytes)
        UPDATE src/app/app.module.ts (789 bytes)

spec.ts file writing unit tests for this component


## templates and data binding

```js
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
    template: '<h1>{{productName}}</h1>'
    //displaying dynamically we use {{}} to render something dynamically evaluated at runtime 
    // value will be placed at runtime so the value of productName will placed in our dom
    // if value of the productName changes at some point in the future angular will
    // automatically updates the dom

    // this concept is called data binding so we are binding our view to have filled in this
    //component

    // whenever the value of that field changes the view is automatically notified and updated
})
export class ProductsComponent {
    productName='Apple'
}
```

## directives
    - another building block of angular
    directives to manipulate dom we can use this to add a dom element remove an existing dom element or change the class of dom element or its style...

**example**
use it like attribute in html we should prefix this attribute with asterisk
    <li *ngFor="">
```js
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
    template: `<div>
                    <h1>{{"product " +productName}}</h1>
                    <p>{{getProduct()}}</p>
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
    productName = 'Apple';
    products=['Apple','mango','grape'];
    getProduct() {
        return this.productName;
    }
}
```

## services
component should not include any logic other tahn presentation logic
- that is the logic behind this view what should happen when we click upon when we select an item from dropdown
- details of how products should be retrieved should be in somewhere else in  our application

in app folder create new folder

nmaing convention should follows
    
    products.service.ts

name of the file is products by convention we have the word in service in file name
