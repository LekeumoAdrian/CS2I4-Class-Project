import { Diplomes } from './../model/diplomes';
import { DiplomesService } from './../services/diplomes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-diplomes',
  templateUrl: './add-diplomes.page.html',
  styleUrls: ['./add-diplomes.page.scss'],
})
export class AddDiplomesPage implements OnInit {

  addForm: FormGroup;

  constructor(private diplomesService: DiplomesService, public toastController: ToastController) {
    this.addForm = new FormGroup({
      intituleDiplome: new FormControl('', Validators.required),
      specialite: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  submit() {
     // this.diplomesService.save(<Diplomes>this.addForm.value).subscribe(() => {
    this.diplomesService.save(this.addForm.value as Diplomes).subscribe(() => {
      this.presentToast('Diplome enregistré');
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
