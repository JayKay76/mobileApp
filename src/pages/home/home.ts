import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NewsPage } from '../news/news'
import { QuoteProvider } from '../../providers/quote/quote';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contents: any[];
  myName:string;
  public name: any;
  constructor(public navCtrl: NavController, private qp:QuoteProvider, public navParams: NavParams, private storage: Storage){
    this.name = localStorage.getItem('name');
  }

  openNewsPage(){
    console.log("IN openNewsPage fuction...");
    this.navCtrl.push(NewsPage);
  }

  openSettingsPage(){
    console.log("IN openSettingsPage fuction...");
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad(){
    console.log("Here 1");
    this.qp.getQuotes().subscribe(data => {
      this.contents = data.contents.quotes;
      console.log(data);
      //this.name = localStorage.getItem('name');
      // localStorage.getItem("name");
    })
   
 }
}

