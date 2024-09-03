import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //string que modificara el valor de @input en el componente hijo
product:string='';

//coleccion de productos añadidos a la lista
productosCarrusel: Producto[]=[];

productoAnanido(producto:Producto){

  //remplazamos el valor de product
  this.product = `${producto.nombre} :$${producto.precio}`;

try{//agregamos la informacion recibida por el parametro de la funcion
  this.productosCarrusel.push(producto);

  Swal.fire({
    title:'God Job',
    text:'Ha añadido el producto con exito',
    icon:'info'
  })
  }catch(error){
    Swal.fire({
      title:'NOOOOOOOOOOOOOOOO',
      text:'Ha ocurrido un error\n'+error,
      icon:'info'
    })
  }
}
}
