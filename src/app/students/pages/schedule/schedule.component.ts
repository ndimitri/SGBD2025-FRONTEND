import {Component, OnInit, computed, signal, effect, runInInjectionContext} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ScheduledCourse} from '../../../models/models';
import {ScheduledCourseService} from '../../services/scheduled-course.service';


@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {

  groupId!: string | null;
  schedule! : ScheduledCourse[];
  selectedCourse: ScheduledCourse | null = null;


  constructor(private route: ActivatedRoute, private scheduleService: ScheduledCourseService) {
  }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    if (this.groupId) {
      this.loadSchedule(this.groupId);
    }

  }

  loadSchedule(groupId: string) {
    this.scheduleService.getScheduleByGroup(groupId).subscribe(
      (data) => {
        this.schedule = data;
      },
      (error) => {
        console.error('Erreur lors du chargement de l’emploi du temps', error);
      }
    );

  }






  // loadSchedule(groupId: string) {
  //   this.scheduleService.getScheduleByGroup(groupId).subscribe(
  //     (data) => {
  //       this.schedule = data;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement de l’emploi du temps', error);
  //     }
  //   );
  // }

}
