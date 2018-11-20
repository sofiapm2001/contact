import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info= InfoPage;
  new = NewPage;
  personas=[];
  persona ='';
  contactos= [
    {
      id: 0,
      nombre: " Fulanito Perez",
      imagen: "..//assets/imgs/emoji.png",
      numero: " 333-807-45-89",
      mail: " fulanop@gmail.com",
      face: " fulanito",
      twitter: "Fulanitinito",
      insta: " fufulanito1"
    },
    {
      id: 1,
      nombre: " Sofi",
      imagen: "..//assets/imgs/emoji.png",
      numero: "333-987-56-12",
      mail: " sofiapm64@gmail.com",
      face: " Sofia Martinez",
      twitter: " SofiMtz",
      insta: " sofia1805"
    },
    {
      id: 2,
      nombre: " Mengano",
      imagen: " ..//assets/imgs/emoji.png",
      numero: " 336-888-96-45",
      mail: " mengano@gmail.com",
      face: " Menganooo",
      twitter: " Mengano 2",
      insta: " Menganito"
    },

  
  ];

  constructor(public navCtrl: NavController) {
    

  }
  clickinfo(c){
    this.navCtrl.push(this.info, c); 
  }

  clicknew(){
    this.navCtrl.push(this.new, {contactos: this.contactos}); 
  }

 
 

}
