import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTA PADRE --> MODULO RAIZ
import { AppRoutingModule } from './app-routing.module';

//ARCHIVO COMPONENT GENERAL
import { AppComponent } from './app.component';

//SOLO IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
