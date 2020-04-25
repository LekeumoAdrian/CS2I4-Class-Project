import { Diplomes } from './../model/diplomes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiplomesService {

  constructor(private http: HttpClient) { }

  save(diplome: Diplomes) {
    return this.http.post(`http://localhost:8080/addDiplome`, diplome);
  }

  getOne(idDiplome: number) {
    return this.http.get(`http://localhost:8080/unDiplome/${idDiplome}`);
  }

  getAll() {
    return this.http.get(`http://localhost:8080/listDiplome`);
  }
}
