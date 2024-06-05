import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  public perfil: Usuario[];

  //en el siguiente arreglo importamos los datos del usuario
  constructor() {
    this.perfil = [
      {
        uid: '',
        email: 'franco@gmail.com',
        password: 'fortnite12',
        nombre: 'franco',
        apellido: 'quiroga',
        rol: 'vist'
      }
    ]
  }

  perfiles: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  coleccionPerfiles: Usuario[] = [];

  comparador() {
    //esta constante lo que hace es resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.perfiles.uid,
      nombre: this.perfiles.nombre,
      apellido: this.perfiles.apellido,
      email: this.perfiles.email,
      rol: this.perfiles.rol,
      password: this.perfiles.password,
    }
 //creo un for que recorra el arreglo con los usuarios subidos
    for (let i = 0; i <= this.perfil.length ; i++) {
      //creamos la constante 
      const orden = this.perfil[i]
      //creamos un if el cual compare los datos
      if (orden.uid === credenciales.uid && orden.nombre === credenciales.nombre && orden.apellido === credenciales.apellido && orden.email === credenciales.email && orden.rol === credenciales.rol && orden.password === credenciales.password) {
        alert("Inicio sesion correctamente")
        
      }else{
        alert("Erorr, los datos no son correctos")
        
      }
      
    }

    this.coleccionPerfiles.push(credenciales)

    console.log(credenciales);
    console.log(this.coleccionPerfiles)
  }
}

