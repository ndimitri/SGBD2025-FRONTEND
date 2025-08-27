import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl = 'http://localhost:8080/schedules';

  constructor(private http: HttpClient) { }

  generateForGroup(groupId: string, startDate: string, endDate: string): Observable<any> {
    const params = { groupId, startDate, endDate };
    return this.http.post(`${this.apiUrl}/generate/year`, null, { params });
  }
}
