import { Component } from '@angular/core';

import { Brawlers } from 'src/app/models/brawlers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//propiedad publica (tipo array)
public info: Brawlers[]

//inicializar la propiedad info
constructor(){
this.info = [
{
  id:"",
  nombre:"EL PRIMO",
  rareza:"ESPECIAL",
  tipo:"TANQUE",
  daño:608,
  imagen:"https://static.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest?cb=20191108132435&path-prefix=es"
},
{
  id:"",
  nombre:"BUZZ",
  rareza:"MITICO",
  tipo:"ASESINO",
  daño:420,
  imagen:"https://static.wikia.nocookie.net/brawlstars/images/6/62/Buzz_Skin-Default.png/revision/latest?cb=20220123071159"
},
{
  id:"",
  nombre:"STU",
  rareza:"EPICO",
  tipo:"ASESINO",
  daño:810,
  imagen:"https://media.brawltime.ninja/brawlers/stu/skins/skin/superstar.png?size=400"
}
]
}
}
