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
  imagen:"https://i.redd.it/58w3k4m1c4u61.jpg"
},
{
  id:"",
  nombre:"BUZZ",
  rareza:"MITICO",
  tipo:"ASESINO",
  daño:420,
  imagen:"https://preview.redd.it/is-buzz-actually-balanced-v0-a5rfqd481fgb1.png?auto=webp&s=143f5f642f662a925e001370d84648305a7fb5e0"
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
