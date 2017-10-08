import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  constructor(private route :ActivatedRoute) {
      route.params.subscribe(
        parametros =>{
            console.log(parametros);
        }
      );
  }

  ngOnInit() {
  }

}
