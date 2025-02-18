import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group, TimeSlot} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {


  private apiUrl = 'http://localhost:8080/groups'; // Remplace par ton URL backend


  constructor(private http: HttpClient) { }

  getGroup(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiUrl}`);
  }


}
