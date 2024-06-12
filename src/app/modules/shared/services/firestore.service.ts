import { Injectable } from '@angular/core';
//cloud firestore - accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //Definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicacion
  //Lo definimos  como una coleccion de firestore que respete la estructura de nuestra interfaz 'Usuario'
private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    /*
    usuariosCollection va a definir la nueva coleccion 'usuarios' que esta en nuestra base de datos
    */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }
}
