import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductosService {

  productos: any[] = [];
  productosFiltrado: any[] = [];
  cargando: boolean = true;
  constructor(public http: Http) {
    this.cargar_productos();
  }

  public buscar_productos(termino:string){

    if(this.productos.length===0){
        this.cargar_productos().then(()=>{
        this.filtrar_productos(termino);
        });
    }else{
        this.filtrar_productos(termino);
    }

  }

  private filtrar_productos(termino:string){
    this.productosFiltrado=[];
    termino=termino.toLowerCase();
    this.productos.forEach(prod=>{
      if(prod.categoria.toLowerCase().indexOf(termino)>=0
       ||prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
        console.log(prod);
      }

    });
  }

  public cargar_producto(cod:string){

    return this.http.get(`https://paginaweb-d784a.firebaseio.com/productos/${ cod }.json`);
  }
  public cargar_productos() {
    this.cargando = true;

    let promesa = new Promise (
      (resolve,rejected)=>{
        this.http.get('https://paginaweb-d784a.firebaseio.com/productos_idx.json')
          .subscribe(res => {
            // setTimeout(
            //   () => {
                 this.cargando = false;
                this.productos = res.json();
                // console.log(res.json());
                resolve();
            //   },1500
            // );
          });
      });

      return promesa;
  }
}
