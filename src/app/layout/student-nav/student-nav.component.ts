import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-nav',
  standalone: false,
  templateUrl: './student-nav.component.html',
  styleUrl: './student-nav.component.css'
})
export class StudentNavComponent implements OnInit{

  groupId: string | null = null;

  ngOnInit() {
    this.groupId = localStorage.getItem('groupId'); // Récupère l'ID du groupe stocké
  }

  constructor( private router: Router, private roleService: RoleService) {}


  logout() {
    // Supprimer le rôle dans le localStorage ou réinitialiser la session
    localStorage.removeItem('groupId');
    this.roleService.clearRole();
    this.router.navigate(['/home']).then(r => console.log(r));
  }

}
