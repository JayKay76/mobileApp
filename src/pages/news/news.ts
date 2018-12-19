import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  
 // var: any;
	news: any[];
 // variable: any;
	//myStatus: string;
  public newsStatus: any;
  public titleFontStatus: any;
  public descriptionFontSize: any;
  variable: any;
  desVariable:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private np:NewsProvider, private storage: Storage) {
    this.newsStatus = localStorage.getItem('newsStatus');
    this.titleFontStatus = localStorage.getItem('titleFontStatus');
    this.descriptionFontSize= localStorage.getItem("descriptionFontSize");
  }
  
  

  ionViewDidLoad(){
  	console.log("Here 1");

    if(this.titleFontStatus == 1){
      this.variable = -2}
    else if(this.titleFontStatus == 2){
      this.variable = -1}
    else if(this.titleFontStatus == 3){
      this.variable = 1}
    else if(this.titleFontStatus == 4){
      this.variable = 2}
    else if(this.titleFontStatus == 5){
      this.variable = 3 }

    if(this.descriptionFontSize == 1){
      this.desVariable = -2}
    else if(this.descriptionFontSize == 2){
      this.desVariable = -1}
    else if(this.descriptionFontSize == 3){
      this.desVariable = 1}
    else if(this.descriptionFontSize == 4){
      this.desVariable = 2}
    else if(this.descriptionFontSize == 5){
      this.desVariable = 3}

    console.log(localStorage.getItem('newsStatus'));
    if (this.newsStatus == 1){
  	this.np.reutersNews().subscribe(data => {
  		this.news = data.articles;
  	})}else if (this.newsStatus == 2){
    this.np.nationalGeograpicNews().subscribe(data => {
      this.news = data.articles;
    })}else if (this.newsStatus == 3)
    this.np.bbcSportNews().subscribe(data => {
      this.news = data.articles;
    })}

  }
  
 



