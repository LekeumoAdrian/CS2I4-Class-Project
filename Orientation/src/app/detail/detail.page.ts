import { DebouchesService } from './../services/debouches.service';
import { Debouches } from './../model/debouches';
import { DiplomesService } from './../services/diplomes.service';
import { Diplomes } from './../model/diplomes';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  Diplomes: Diplomes;

  constructor(private router: Router, private route: ActivatedRoute, private diplomesService: DiplomesService) {
    let CurrentId = this.route.snapshot.paramMap.get('id'); // Retourne un String
    this.diplomesService.getOne(Number(CurrentId)).subscribe((data: Diplomes) =>
      this.Diplomes = data, err => console.log(err)); // Convertir le String en number
  }

  ngOnInit() {
  }

}
