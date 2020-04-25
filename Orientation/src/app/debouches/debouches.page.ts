import { Component, OnInit } from '@angular/core';
import { Debouches } from '../model/debouches';
import { DebouchesService } from '../services/debouches.service';

@Component({
  selector: 'app-debouches',
  templateUrl: './debouches.page.html',
  styleUrls: ['./debouches.page.scss'],
})
export class DebouchesPage implements OnInit {

  Debouche: Debouches[];

  // Injecter le service
  constructor(private debouchesService: DebouchesService) {
  }

  ngOnInit(): void {
    this.debouchesService.getAll().subscribe((data: Debouches[]) => {
      this.Debouche = data;
    }, err => console.log(err));
  }

}
