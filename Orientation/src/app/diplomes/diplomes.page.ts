import { Component, OnInit } from '@angular/core';
import { Diplomes } from '../model/diplomes';
import { DiplomesService } from '../services/diplomes.service';

@Component({
  selector: 'app-diplomes',
  templateUrl: './diplomes.page.html',
  styleUrls: ['./diplomes.page.scss'],
})
export class DiplomesPage implements OnInit {

  Diplome: Diplomes[];

  // Injecter le service
  constructor(private diplomesService: DiplomesService) {
  }

  ngOnInit(): void {
    this.diplomesService.getAll().subscribe((data: Diplomes[]) => {
      this.Diplome = data;
     }, err => console.log(err));
  }

}
