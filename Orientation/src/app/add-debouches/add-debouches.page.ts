import { Debouches } from './../model/debouches';
import { DebouchesService } from './../services/debouches.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-debouches',
  templateUrl: './add-debouches.page.html',
  styleUrls: ['./add-debouches.page.scss'],
})
export class AddDebouchesPage implements OnInit {

  addForm: FormGroup;

  constructor(private debouchesService: DebouchesService, public toastController: ToastController) {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  submit() {
     // this.debouchesService.save(<Debouches>this.addForm.value).subscribe(() => {
    this.debouchesService.save(this.addForm.value as Debouches).subscribe(() => {
      this.presentToast('Debouches enregistré');
      this.addForm.reset();
    }, err => {
      console.log(err);
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }

}
