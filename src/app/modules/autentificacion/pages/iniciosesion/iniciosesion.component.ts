import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  constructor(
    public servicoAuth: AuthService,
    public servicioFireStore: FirestoreService,
    public servicioRutas: Router
  ){}

  usuarioIngresado:Usuario={
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  hide = true;
  /*
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
  }*/
 

//funcion para iniciar sesion
    async iniciarSesion(){

  const credenciales= {
    email:this.usuarioIngresado.email,
    password:this.usuarioIngresado.password
  }
  const res= await this.servicoAuth.iniciosesion(credenciales.email, credenciales.password)
  .then(res =>{
    alert('se pudo iniciar sesion');
    this.servicioRutas.navigate(['/Inicio'])
  })
  .catch(err =>{
    alert('no se pudo iniciar sesion'+err)

    this.LimpiarInputs();
  })
 }

 LimpiarInputs(){
  const inputs={
    email: this.usuarioIngresado.email='',
    password:this.usuarioIngresado.password='',
  }
 }

 }