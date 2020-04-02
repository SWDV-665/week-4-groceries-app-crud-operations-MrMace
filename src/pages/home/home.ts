import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {AlertController } from 'ionic-angular';
import { ValueTransformer } from '@angular/compiler/src/util';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Item Removed: ", item);
    const toast = this.toastCtrl.create({
      message: 'Item Removed: ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  editItem(item, index) {
    console.log("Edit Item: ", item);
    const toast = this.toastCtrl.create({
      message: 'Edit Item: ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem() {
    console.log("Add item");
    this.inputDialogService.showPrompt();
  }

 
}


