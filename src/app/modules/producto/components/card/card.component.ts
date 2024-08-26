import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //deinimos coleccion de productos locales
coleccionProducto: Producto[]=[];

//Variable lcoal para seleccionar un producto en especifico
productoSeleccionado!: Producto;

modalVisible: boolean= false;

constructor(public servicioCrud: CrudService){}

ngOninit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProducto=producto;
  })
}

//Funcion para mostrar mas informacion de los productos
mostrarVer(info: Producto){
//cambio estado del modal a true (ahora es visible)
this.modalVisible=true;
//Guardo en variable seleccioanado la informacion de prodcuto elegido
this.productoSeleccionado=info;
}
}
