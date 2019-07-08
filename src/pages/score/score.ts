import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  score2: any;
  score1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score1 = 0;
this.score2 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }
  incrementScore1() {
    this.score1= this.score1 + 1;
    }
    incrementScore2(){
      this.score2 = this.score2 + 1 ;
    }
    reset(){
      this.score2 = 0;
      this.score1 = 0;
      }
}
