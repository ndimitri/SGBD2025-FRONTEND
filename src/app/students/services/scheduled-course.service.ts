import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ScheduledCourse} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ScheduledCourseService {
  // private apiUrl = 'https://api.example.com/scheduled-courses'; // Remplace par ton URL backend
  private apiUrl = 'http://localhost:8080/schedules/group/'; // Remplace par ton URL backend

  constructor(private http: HttpClient) {}

  getScheduleByGroup(groupId: string): Observable<ScheduledCourse[]> {
    return this.http.get<ScheduledCourse[]>(`${this.apiUrl}${groupId}`);
    // return this.http.get<ScheduledCourse[]>(`${this.apiUrl}${'c2cf6b3f-3f69-431f-9c6e-7ae97f96b5f6'}`);
  }




}
