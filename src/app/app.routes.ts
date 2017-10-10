import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  ProductoComponent,
  PortafolioComponent,
  SearchComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }//Para cualquier pagina no encontrada , enviarla al home
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
