import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true //booleana para manejo de registro y el inicio de sesion
  deslogueado = false //booleana para manejo de cierre de sesion


  constructor(
    public servicioAuth: AuthService,
    public seviciorRutas: Router
  ) { }

  //Funcion "ingresar para invertir los valores"
  Ingresar() {
    this.logueado = false
    this.deslogueado = true
  }

  //Funcion "cerrarSesion"mg 
  cerrarSesion() {
    this.logueado = true
    this.deslogueado = false

    this.servicioAuth.cerrarsesion();
    this.seviciorRutas.navigate(['/'])
  }



  //Funcion cambiar fondo
  cambiarFondo() {
    let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
    let label_toggle: HTMLElement | null = document.getElementById('label_toggle') as HTMLElement


    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked)

      if (checked) {
        label_toggle!.innerHTML = '<i class="fa-solid fa-sun"></i>'
      } else {
        label_toggle!.innerHTML = '<i class="fa-solid fa-moon"></i>'

      }
    }
  }








}
