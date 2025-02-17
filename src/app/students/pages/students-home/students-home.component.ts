import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';
import {Group} from '../../../models/models';
import {GroupsService} from '../../services/groups.service';

@Component({
  selector: 'app-students-home',
  standalone: false,
  templateUrl: './students-home.component.html',
  styleUrl: './students-home.component.css'
})
export class StudentsHomeComponent {

  groups! : Group[];

  constructor(private router: Router, private roleService: RoleService, private groupService: GroupsService) {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroup().subscribe(
      (data) => {
        this.groups = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des groupes', error);
      }
    );
  }

  selectGroup(groupId: string) {
    localStorage.setItem('groupId', groupId);
    this.roleService.setRole('students'); // Stocke le rôle et met à jour l'observable
    this.router.navigate([`students/schedule/${groupId}`]).then(r => console.log(r));
  }


}
