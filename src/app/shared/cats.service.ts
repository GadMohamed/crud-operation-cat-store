import { Injectable } from '@angular/core';
import { Catsclass } from './catsclass.model';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  formData:Catsclass;

  constructor(private localStorage:LocalStorage) { }

  

  getCats()
  {

   // var p = [];
    // for (let i = 0; i < localStorage.length; i++){
    //  p.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) ;
    // }

    // return p ;

    this.localStorage
    .setItem('user', { firstName:'Henri', lastName:'Bergson' })
    .subscribe( () => {} );
    
  }

}
