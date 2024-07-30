import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

//Archivo de rutas del modulo
import { AdminRoutingModule } from './admin-routing.module';

//Vista
import { AdminComponent } from './pages/admin/admin.component';

//Componente
import { TableComponent } from './components/table/table.component';

//Paqueterias para formulario y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes de material
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
