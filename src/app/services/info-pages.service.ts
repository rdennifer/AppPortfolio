import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPages } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPages = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {
        this.cargarInfo();
        this.cargarEquipo();
    
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pages.json')
    .subscribe( (resp: InfoPages) => {

      this.cargada = true;
      this.info = resp;
     
    });

   }

   private cargarEquipo(){

    this.http.get('https://angular-porfolio-7aef7-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      
    });


   }

}
