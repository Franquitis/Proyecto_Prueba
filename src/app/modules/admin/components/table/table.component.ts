import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos coleccion local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];


  productoSeleccionado!: Producto; // ! -> toma valores vacios
  modalVisibleProducto: boolean = false;
  //definimos formulario para los productos

  /*
  atributos alfanumericos (string) se inicializan con comillas simples
  atributos numericos (number) se inicializan con 0
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),

  })

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void { 
    this.servicioCrud.obtenerProducto().subscribe(producto=>{
      this.coleccionProductos=producto
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con exito!")
        }).catch(error => {
          alert("Ha ocurrido n error al cargar el producto")
        })
    }
  }

  mostrarBorrar(productoSeleccionado:Producto){
    this.modalVisibleProducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }


  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("Se ha podido eliminar con exito");
    })
    .catch(error =>{
      alert("Ha ocurrido un error al eliminar el producto: "+error);
    })
  }


  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado


    this.producto.setValue({
      nombre:productoSeleccionado.nombre,
      precio:productoSeleccionado.precio,
      descripcion:productoSeleccionado.descripcion,
      categoria:productoSeleccionado.categoria,
      imagen:productoSeleccionado.imagen,
      alt:productoSeleccionado.alt
    })
  }
  editarProducto(){
    let datos: Producto={
      //Sollo idProducto no se modifica por el usuario
      idProducto: this.productoSeleccionado.idProducto,
      /*los demas tributos reciben una nueva informacion desde el formulario*/
      nombre:this.producto.value.nombre!,
      precio:this.producto.value.precio!,
      descripcion:this.producto.value.descripcion!,
      categoria:this.producto.value.categoria!,
      imagen:this.producto.value.imagen!,
      alt:this.producto.value.alt!
    }
    //enviamos elmetodo el id del producto seleccioando y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos).then(producto=>{
      alert("El producto se ha editado con exito")
    }).catch(error =>{
      alert("Hubo un problema al editar el producto: "+error)
    })
  }
}
