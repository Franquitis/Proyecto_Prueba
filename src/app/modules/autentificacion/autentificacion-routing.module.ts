import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosComponent } from './pages/registros/registros.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

const routes: Routes = [
  {
    path:"registro",component:RegistrosComponent
  },
  {
    path:"inicio-sesion",component:IniciosesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
