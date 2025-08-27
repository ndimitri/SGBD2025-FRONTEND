import {Component, OnInit} from '@angular/core';
import {Group} from '../../../models/models';
import {GroupsService} from '../../../students/services/groups.service';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-generate-schedule',
  standalone: false,
  templateUrl: './generate-schedule.component.html',
  styleUrl: './generate-schedule.component.css'
})
export class GenerateScheduleComponent implements OnInit {
  groups: Group [] = [];
  selectedGroupId: string | null = null;
  loading: boolean = false;
  message : string = '';

  constructor(
    private groupService: GroupsService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.groupService.getGroup().subscribe(groups => this.groups = groups);
  }

  generateSchedule() {
    if (!this.selectedGroupId) return; // On sort si pas de groupe sélectionné

    this.loading = true;
    this.scheduleService.generateForGroup(this.selectedGroupId, '2025-09-14', '2026-06-30').subscribe({
      next: () => {
        this.message = 'Horaires générés avec succès!';
        this.loading = false;
      },
      error: (err : any) => {
        this.message = 'Erreur lors de la génération: ' + err.message;
        this.loading = false;
      }
    });
  }

}
