import { Debouches } from './../model/debouches';
import { Diplomes } from './../model/diplomes';
import { DebouchesService } from './../services/debouches.service';
import { DiplomesService } from './../services/diplomes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Diplome: Diplomes[];
  Debouche: Debouches[];

  // Injecter le service
  constructor(private diplomesService: DiplomesService, private debouchesService: DebouchesService) {
  }

  ngOnInit(): void {
    this.diplomesService.getAll().subscribe((data: Diplomes[]) => {
      this.Diplome = data;
    }, err => console.log(err));
    this.debouchesService.getAll().subscribe((data: Debouches[]) => {
      this.Debouche = data;
    }, err => console.log(err));
  }

}
