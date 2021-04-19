import { Injectable } from '@angular/core';

// we need this decorator only if this service deoendecies in its constructor

@Injectable({
  providedIn: 'root'
})//another decorator fuynction similar to component dec
export class EmailService {

  constructor() { }
  // constructor(logService:LogService) { }
  // this class tells angular this class has injectable class
  // angular should be able to inject the dependencies of the class into its constructor
  

  // suppose we use @Component decorator we dont need @injectable decorator
  // because internally it includes  @injectable decorator so thats why we dont use it on products.componnt.ts
}

