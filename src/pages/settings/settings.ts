import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
  }

  saveOptions(){
  	console.log("IN openSettingsPage fuction...");
  	this.navCtrl.push(SettingsPage);
  	//this.storage.set("")
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
