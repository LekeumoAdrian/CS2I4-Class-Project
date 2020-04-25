import { Debouches } from './../model/debouches';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DebouchesService {

  constructor(private http: HttpClient) { }

  save(debouche: Debouches) {
    return this.http.post(`http://localhost:8080/addDebouche`, debouche);
  }

  getOne(idDebouche: number) {
    return this.http.get(`http://localhost:8080/uneDebouche/${idDebouche}`);
  }

  getAll() {
    return this.http.get(`http://localhost:8080/listDebouche`);
  }
}
