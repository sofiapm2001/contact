import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
      nombre= '';
      numero= '';
      mail= '';
      face='';
      twitter= '';
      insta= '';
      contactos = [];

  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos=this.navParams.get('contactos');
  }
  clickadd(){
    if (this.nombre.length>0){
      this.contactos.push({imagen: "..//assets/imgs/emoji.png", nombre: this.nombre, mail: this.mail, numero: this.numero, face: this.face, twitter: this. twitter, insta: this.insta});
      this.navCtrl.pop();
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'OOOOPS',
        subTitle: 'completa la informacion para agregar el contacto',
        buttons: ['OK']
      });
      alert.present();
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
