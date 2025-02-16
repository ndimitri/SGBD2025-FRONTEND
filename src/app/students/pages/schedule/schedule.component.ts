import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{

  groupId: string | null = null;
  schedule: any[] | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId'); // Récupère l’ID du groupe depuis l'URL
    this.loadSchedule();
  }

  loadSchedule() {
    // Simuler une récupération d'emploi du temps (remplace avec un appel API plus tard)
    const mockSchedules: { [key: string]: any[] } = {
      '1': [{ day: 'Lundi', time: '08:00', subject: 'Maths' }],
      '2': [{ day: 'Mardi', time: '10:00', subject: 'Physique' }],
      '3': [{ day: 'Mercredi', time: '14:00', subject: 'Histoire' }]
    };

    this.schedule = mockSchedules[this.groupId!] || null;
  }

}
