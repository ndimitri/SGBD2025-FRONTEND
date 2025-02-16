import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


interface Course {
  day: string;
  time: string;
  subject: string;
  class: string;
}

@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{

  groupId: string | null = null;
  schedule: Course[] | null = null;
  selectedCourse: Course | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId'); // Récupère l’ID du groupe depuis l'URL
    this.loadSchedule();
  }

  loadSchedule() {
    // Simuler une récupération d'emploi du temps (remplace avec un appel API plus tard)
    const mockSchedules: { [key: string]: Course[] } = {
      '1': [{ day: 'Lundi', time: '08:00', subject: 'Maths', class: 'Salle 101' },{ day: 'Mercredi', time: '14:30', subject: 'Chimie', class: 'Salle 50' }],
      '2': [{ day: 'Mardi', time: '10:00', subject: 'Physique', class: 'Salle 102' },{ day: 'Mercredi', time: '14:50', subject: 'Musique', class: 'Salle 50' }],
      '3': [{ day: 'Mercredi', time: '14:00', subject: 'Histoire', class: 'Salle 103' }]
    };

    this.schedule = mockSchedules[this.groupId!] || null;
  }

}
