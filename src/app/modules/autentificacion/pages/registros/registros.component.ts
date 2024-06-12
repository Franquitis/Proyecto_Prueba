import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio d eautentificacion
import { AuthService } from '../../services/auth.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  //input de la contraseña para ver los caracteres o no
  hide = true;

  //IMPORTAR INTERFAZ DE USUARIO
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }
  //CREAMOS COLECCION DE USUARIOS, TIPO "USUARIO" PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];
  //fin de importaciones
  constructor(public servicioAuth: AuthService, 
     public serviciosRutas: Router){}

  //FUNCION PARA EL REGISTROS DE NUEVOS USUARIOS
  async registrar() {
    //constante de credenciales, va a resguardar la informacion que ingrese ell usuario
    /*
    const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    //enviamos la nueva informacion como un nuevo objeto a la coleccion de usuarios
    this.coleccionUsuarios.push(credenciales)
    this.cleaner()
    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
 */

    //REGISTRO CON SERVICIO
const credenciales={
  email:this.usuarios.email,
  password:this.usuarios.password
}

const res =await this.servicioAuth.registrar(credenciales.email, credenciales.password)
//el metodo THEN es una promesa que devuelve el mismo valor si todo sle bien
.then(res => {
  alert("Se pudo registrar con exito")
  //el metodo NAVIGATE nos redirecciona a otra vista
  this.serviciosRutas.navigate(['/inicio'])
})
//el metodo CATCH captura una falla y la vuelve error cuando la promesa salga mal
.catch(error => {
alert("Hubo un error al registrarse \n"+error)
})

//se envia la nueva informacion como un nuevo objeto a la coleccion de usuarios

//notificamos al nuevo usaurio que se registro con exito
alert("Se ha registrado con exito")
this.cleaner()
  }

//Funcion para limpiar los inputs
  cleaner() {
    const input = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
    alert("Se registro corectamente")
  }
}
