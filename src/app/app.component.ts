import {Component, OnInit} from '@angular/core';
import {RoleService} from './services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'projetSGBD2025-FRONTEND';

  role: string | null = null;

  constructor(private roleService: RoleService) {}

  ngOnInit() : void {
    this.roleService.role$.subscribe(role => {
      this.role = role;
    })
  }


  logout() {
    this.roleService.clearRole();
  }


}
