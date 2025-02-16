import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem('role'));
  role$ = this.roleSubject.asObservable();



  setRole(role: string): void {
    localStorage.setItem('role', role); // Save the role in the local storage
    this.roleSubject.next(role); // Notify the subscribers
  }

  getRole(): string | null {
    return this.roleSubject.getValue();
  }

  clearRole() {
    localStorage.removeItem('role');
    this.roleSubject.next(null); // Met à jour l'observable
  }



  constructor() { }
}
