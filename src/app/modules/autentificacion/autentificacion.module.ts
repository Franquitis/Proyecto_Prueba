import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//VISTAS DE AUTENTIFICACION
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistrosComponent } from './pages/registros/registros.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

//COMPONENTES DE MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//COMPONENTE DE ANGULAR
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrosComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  
  exports: [
    RegistrosComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ]
})
export class AutentificacionModule { }
