import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES LOCALES Y GLOBALES
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// COMPONENTES DE MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

//importamos para acceder a todas las rutas
import { AppRoutingModule } from 'src/app/app-routing.module';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
