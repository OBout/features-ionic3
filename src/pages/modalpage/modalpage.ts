import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage implements OnInit {

  countries: Array<string>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ngOnInit() {
    this.setCountries()
  }

  setCountries() {
    this.countries = ["Belgium", "Holland", "Germany", "France"]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpagePage');
  }

  filterItems(ev: any) {
    this.setCountries();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.countries = this.countries.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  select(country: string) {
    this.viewCtrl.dismiss(country);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
