import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private apiUrl = 'http://localhost:8080/courses';

  constructor(private http : HttpClient) { }


  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.apiUrl);
  }
}
