import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Classroom} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiUrl = 'http://localhost:8080/classrooms';

  constructor(private http : HttpClient) { }

  getClassrooms() : Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.apiUrl);
  }

}
