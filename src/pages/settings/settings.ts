/**
 *  SettingsPage.ts page.
 *  
 *  Imports needed below beside defaults are Storage and HomePage
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';


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
  news: any[];
  newName:string;
  myName:string;
  newsStatus: string;
  titleFontStatus: string;
  descriptionFontSize: string;
  val: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,  private storage: Storage) {
  }



  /* This section contains the saveOptions() which is set on the settings.html. Within the saveOptions() function there are storage 
  *  setting settings to store the Name on the HomePage and set the newsSource on the NewsPage, along with storing font sizes for both 
  *  the title and description of the news story also on the NewsPage
  */

  saveOptions(){

    //console.log("IN openSettingsPage fuction...");
    this.myName = this.newName;
    this.newName = "";
    localStorage.setItem("name",this.myName);
    //console.log(this.myName);
    localStorage.setItem("newsStatus", this.newsStatus);
    localStorage.setItem("titleFontStatus", this.titleFontStatus);
    localStorage.setItem("descriptionFontSize", this.descriptionFontSize);
    this.navCtrl.push(HomePage, {
      data: this.myName
    });
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

     } 
  
}
