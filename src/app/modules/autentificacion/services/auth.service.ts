import { Injectable } from '@angular/core';
//servicio en la nube de autentificacion de fierebase
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }
  //funcion para el registro
  registrar(email:string, password:string){
    //retorna el valor que es creado con elmetodo "create email"
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
  //funcion de inicio de sesion
  iniciosesion(email:string, password:string){
    //valida la informacion del usuario y si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  //funcion para cerrar sesion
  cerrarsesion(){
    //devuelve una promesa vacia - quita token
    return this.auth.signOut();
  }
  //funcion para tomar el uid
}
