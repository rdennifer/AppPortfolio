import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { InfoPagesService } from 'src/app/services/info-pages.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion;
  id: string;


  constructor(private route: ActivatedRoute,
    public _productoService: ProductosService, public _services: InfoPagesService) {
      this.producto = {} as ProductoDescripcion;
      this.id = ''; 
    this.route.params
      .subscribe(parametros => {

        this._productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;
            


          });
      });
  }



}
