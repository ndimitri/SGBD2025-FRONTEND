import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{


  constructor(private roleService: RoleService, private router: Router) {}


  logout() {
    // Supprimer le rôle dans le localStorage ou réinitialiser la session
    this.roleService.clearRole();
    this.router.navigate(['/home']).then(r => console.log(r));
  }


}
