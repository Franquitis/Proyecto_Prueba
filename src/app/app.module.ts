import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTA PADRE --> MODULO RAIZ
import { AppRoutingModule } from './app-routing.module';

//ARCHIVO COMPONENT GENERAL
import { AppComponent } from './app.component';

//SOLO IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//HERRAMIENTAS DE LA BASE DE DATOS
import { environment } from 'src/environments/environments'; //vincula la base de datos con la app
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializar firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
