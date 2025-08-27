import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course, Site} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:8080/courses';
  private sitesUrl = 'http://localhost:8080/sites';

  constructor(private http: HttpClient) { }


  createCourse(courseData: any): Observable<any> {
    return this.http.post(this.apiUrl, courseData);
  }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.sitesUrl);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
