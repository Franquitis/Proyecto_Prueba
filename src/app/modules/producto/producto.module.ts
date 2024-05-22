import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { RarezaComponent } from './pages/rareza/rareza.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { TiendaComponent } from './pages/tienda/tienda.component';


@NgModule({
  declarations: [
    ProductoComponent,
    RarezaComponent,
    TipoComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    RarezaComponent,
    TipoComponent,
    TiendaComponent
  ]
})
export class ProductoModule { }
