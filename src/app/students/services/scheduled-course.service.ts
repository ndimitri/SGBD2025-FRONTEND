import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TimeSlot} from '../../models/models';
import {TimeSlotUpdateForm} from '../../models/forms';

@Injectable({
  providedIn: 'root'
})
export class ScheduledCourseService {
  private apiUrl = 'http://localhost:8080/timeslots/';

  constructor(private http: HttpClient) {}

  getScheduleByGroup(groupId: string): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.apiUrl}group/${groupId}`);
  }

  updateTimeSlot(slot: TimeSlotUpdateForm) {
    return this.http.put(`${this.apiUrl}${slot.id}`, slot);
  }

  getTimeSlotById(id: string): Observable<TimeSlot> {
    return this.http.get<TimeSlot>(`${this.apiUrl}${id}`);
  }





}
