import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';

@Component({
  selector: 'app-students-home',
  standalone: false,
  templateUrl: './students-home.component.html',
  styleUrl: './students-home.component.css'
})
export class StudentsHomeComponent {

  groups = [
    { id: '1', name: 'Groupe A' },
    { id: '2', name: 'Groupe B' },
    { id: '3', name: 'Groupe C' }
  ];

  constructor(private router: Router, private roleService: RoleService) {
  }

  selectGroup(groupId: string) {
    localStorage.setItem('groupId', groupId);
    this.roleService.setRole('students'); // Stocke le rôle et met à jour l'observable
    this.router.navigate([`students/schedule/${groupId}`]).then(r => console.log(r));
  }


}
