import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:4201';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url + '/heroes');

  }

  evolve(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.url + '/heroes/' + hero.name + '/evolve/' + hero.multiplier , null);
  }
}
