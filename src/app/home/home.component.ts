import { Component } from '@angular/core';
import {RoleService} from '../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private roleService: RoleService, private router: Router) {
  }


  chooseRole(role: string) {


    if (role === 'admin') {
      this.roleService.setRole(role); // Stocke le rôle et met à jour l'observable
      this.router.navigate(['/admin/dashboard']).then(r => console.log(r)); // Ne pas laisser de console.log dans le code final
    } else {
      this.router.navigate(['/students']).then(r => console.log(r)); // Créer des Exceptions adaptées pour les erreurs
    }

  }
}
