import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto [] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) 
  {
      this.cargarProdutos();
  }

  private cargarProdutos(){

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-porfolio-7aef7-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: any ) => {

          this.productos = resp;
          this.cargando = false;
          resolve("");
        });

    } );

    

  }

    getProducto( id: string)
{
    return this.http.get (`https://angular-porfolio-7aef7-default-rtdb.firebaseio.com/productos/${id}.json`);
  

    }

    buscarProducto(termino:string){
    
      if (this.productos.length === 0){

          this.cargarProdutos().then( ()=>{
              this.filtrarProductos(termino);
          });


      }else {

        this.filtrarProductos( termino);

      }
    }

  private filtrarProductos( termino: string){

  
    this.productosFiltrado = [];

  

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino  ) >= 0 || tituloLower.indexOf( termino ) >=0 ){
          this.productosFiltrado.push( prod  );
      }
    });

  }
}



