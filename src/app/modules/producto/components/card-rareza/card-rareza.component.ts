import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-rareza',
  templateUrl: './card-rareza.component.html',
  styleUrls: ['./card-rareza.component.css']
})
export class CardRarezaComponent {

  coleccionProductos: Producto[]=[];

  coleccionRareza: Producto[]=[];

  productoSeleccionado!:Producto;

  modalVisible: boolean=false

  constructor(public servicioCrud:CrudService){}

  ngOninit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos=producto
    })
  }

  //Funcion para filtrar los productos de tipo rareza
  mostrarProductosRareza(){
    this.coleccionProductos.forEach(producto =>{
      if(producto.categoria=== "rareza"){
        this.coleccionRareza.push(producto)
      }
    })
  }
}
