import { Component } from '@angular/core';
import {Group} from '../../../models/models';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';
import {GroupsService} from '../../../students/services/groups.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
    this.router.navigate([`admin/schedule/${groupId}`]).then(r => console.log(r));
  }

}
