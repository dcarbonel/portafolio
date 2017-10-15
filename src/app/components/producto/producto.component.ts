import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  producto : any =undefined;
  codigo : string =undefined;
  constructor(private route :ActivatedRoute,
              private ps : ProductosService) {


      route.params.subscribe(
        parametros =>{
            //console.log(parametros);//obtiene el objeto parametros
            //console.log(parametros['id']);//obtiene el id de parametros
            ps.cargar_producto(parametros['id'])
            .subscribe(res=>{
              this.codigo=parametros['id'];
              this.producto=res.json();
              // console.log(this.producto);
            });
        }
      );
  }

  ngOnInit() {
  }

}
