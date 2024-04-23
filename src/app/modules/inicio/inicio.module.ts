import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//VISTA
import { InicioComponent } from './components/inicio/inicio.component';

//COMPONENTE
import { CardComponent } from './components/card/card.component';

//COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
