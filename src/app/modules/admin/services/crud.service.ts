import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //definimos colleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto');
  }

  //CREAR productos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el producto en la BD
        const idProducto = this.database.createId();
        //asignamos un ID creado al atriburo idProdcuto de la interfaz Producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        resolve(resultado)
      } catch (error) {
        reject(error);
      }

    })
  }
  //OBTENER productos
  obtenerProducto() {
    /* 
    snapshotChanges => toma captura del estado de los datos
    pipe => tuberias que retorna un nuevo arreglo
    map => "mapea" o recorre esa nueva informacion
    a => resguarda la nueva informacion y la envia como un documento
    */
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  //EDITAR productos
  modificarProducto(idProducto:string,nuevaData:Producto){
    return this.database.collection('producto').doc(idProducto).update(nuevaData)
  }

  //ELIMINAR productos
  eliminarProducto(idProdcuto:string){
    return new Promise((resolve, reject)=>{
      try{
        const respuesta = this.productosCollection.doc(idProdcuto).delete();

        resolve (respuesta);
      }
      catch(error){
        reject(error);
      }
    })
  }
}
