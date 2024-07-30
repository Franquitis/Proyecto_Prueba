import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //definimos colleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection= database.collection('producto');
   }

//CREAR productos
crearProducto(producto: Producto){
return new Promise(async(resolve, reject)=>{
  try{
    //creamos numero identificativo para el producto en la BD
    const idProducto =this.database.createId();
    //asignamos un ID creado al atriburo idProdcuto de la interfaz Producto
    producto.idProducto= idProducto;

    const resultado =await this.productosCollection.doc(idProducto).set(producto);
  } catch(error){
    reject(error);
  }
  
})
}
   //OBTENER productos
   //EDITAR productos
   //ELIMINAR productos
   
}
