import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagesService } from 'src/app/services/info-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public _services: InfoPagesService, 
              private router: Router
    ){

                  
    
  }


  buscarProducto( termino: string){
      
    if (termino.length < 1) {
      return; // Si el input esta vacio no hacemos nada
    }

    this.router.navigate(['/search', termino])
    
  }

}
