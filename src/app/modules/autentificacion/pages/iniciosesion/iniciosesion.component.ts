import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'
import Swal from 'sweetalert2';

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

  try{

    //Obtenemos el usuario de la BD
    const usuarioBD = await this.servicoAuth.obtenerUsuario(credenciales.email);
    //condicional verificaba que ese usuario de la BD existiera o que sea igual al de nuestra coleccion
    if(!usuarioBD || usuarioBD.empty){
      Swal.fire({
        title: "Oh no",
        text: "Correo electronico no registrado",
        icon: "error"
      });
      this.LimpiarInputs();
      return;
    }

// vinculaba al primer documento de la coleccion "usuarios" que se obtenia desde la BD
    const usuarioDoc = usuarioBD.docs[0];

    //extrae los datos del documento en forma de "objeto" y se especifica que va a ser del tipo "usuario"
    //(se refiere a la interfaz Usuario de nuestros modulos)
    const usuarioData = usuarioDoc.data() as Usuario;

    //encripta la contraseña que el usuario envia mediante "Iniciar Sesion"
    const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();


    /*
    Condicional que compara la contraseña que acabamos de encriptar y que el usuario envie
    con la que recibimos del UsuarioData
    */
    if (hashedPassword !== usuarioData.password) {
      Swal.fire({
        title: "Oh no",
        text: "Contraseña incorrecta",
        icon: "error"
      });
      this.usuarioIngresado.password ='';
      return;
    }

    const res= await this.servicoAuth.iniciosesion(credenciales.email, credenciales.password)
    .then(res =>{
      Swal.fire({
        title: "Buen trabajo!",
        text: "Se pudo iniciar sesion",
        icon: "success"
      });
      this.servicioRutas.navigate(['/Inicio'])
    })
    .catch(err =>{
      Swal.fire({
        title: "Oh no",
        text: "Hubo un error al iniciar sesion",
        icon: "error"
      });
  
      this.LimpiarInputs();
    })
  }catch(error){
    this.LimpiarInputs();
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