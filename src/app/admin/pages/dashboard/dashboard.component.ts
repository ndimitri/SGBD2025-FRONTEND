import { Component } from '@angular/core';
import {Group} from '../../../models/models';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';
import {GroupsService} from '../../../students/services/groups.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  groups$: Observable<Group[]>;

  constructor(private router: Router, private roleService: RoleService, private groupService: GroupsService) {
    this.groups$ = this.groupService.getGroup();
  }

  selectGroup(groupId: string) {
    localStorage.setItem('groupId', groupId);
    this.roleService.setRole('students');
    this.router.navigate([`admin/schedule/${groupId}`]).then(r => console.log(r));
  }
}
