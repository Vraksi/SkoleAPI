import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorService {

  constructor(private http: HttpClient) { }

  public generate(): Observable<number> {
    return this.http.get<number>('/api/RandomNumber/Generate');
  }
}