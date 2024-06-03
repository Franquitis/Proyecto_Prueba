import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

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
  email:'',
  rol: '',
  password: ''
}
//CREAMOS COLECCION DE USUARIOS, TIPO "USUARIO" PARA ARRAYS
coleccionUsuarios: Usuario[]=[];

//FUNCION PARA EL REGISTROS DE NUEVOS USUARIOS
registrar(){
  //constante de credenciales, va a resguardar la informacion que ingrese ell usuario
const credenciales = {
  uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
  nombre: this.usuarios.nombre,
  apellido: this.usuarios.apellido,
  email: this.usuarios.email,
  rol: this.usuarios.rol,
  password: this.usuarios.password
}

//enviamos la nueva infirmacion como un nuevo objeto a la coleccion de usuarios
this.coleccionUsuarios.push(credenciales)

//mostramos credenciales por consola
console.log(credenciales);
console.log(this.coleccionUsuarios);
}
}
