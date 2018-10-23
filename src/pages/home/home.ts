import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list'
import { ModalpagePage } from '../modalpage/modalpage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {

  }

  navigatePushToList() {
    this.navCtrl.push(ListPage)
  }

  navigateRootToList() {
    this.navCtrl.setRoot(ListPage)
  }

  toastMe() {
    let toast = this.toastCtrl.create({
      message: 'Hello World',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  alertMe() {
    let alert = this.alertCtrl.create({
      title: 'Hello',
      subTitle: 'World',
      buttons: ['Awesome']
    });
    alert.present();
  }

  modalMe() {
    let profileModal = this.modalCtrl.create(ModalpagePage);
    profileModal.present();
    profileModal.onDidDismiss(data => {
      console.log(data)
    })
  }

}
