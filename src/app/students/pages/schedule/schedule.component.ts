import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TimeSlot} from '../../../models/models';
import {ScheduledCourseService} from '../../services/scheduled-course.service';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({
  //       transform: 'translateX(0)', // Position initiale quand l'élément est visible
  //     })),
  //     state('out', style({
  //       transform: 'translateX(100%)', // Position hors de la vue
  //     })),
  //     transition('in <=> out', [
  //       animate('300ms ease-in-out')
  //     ])
  //   ])
  // ]
})
export class ScheduleComponent implements OnInit {

  groupId!: string | null;
  schedule! : TimeSlot[];
  selectedCourse: TimeSlot | any = null;

  isSelectedCourseVisible = false;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    slotMinTime: '08:00:00',
    slotMaxTime: '23:00:00',
    allDaySlot: false,
    locale: 'fr',
    slotDuration: '00:30:00', // Garde des créneaux lisibles
    expandRows: true, // Force l'affichage plus aéré
    eventTextColor: '#fff', // Améliore la lisibilité
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [],
    eventClick: this.handleEventClick.bind(this)
  };



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
        this.updateCalendarEvents();
      },
      (error) => {
        console.error('Erreur lors du chargement de l’emploi du temps', error);
      }
    );

  }

  updateCalendarEvents() {
    this.calendarOptions.events = this.schedule.map((course => ({
      id: course.id,
      title: course.course.name,
      course: course.course.professor,
      start: course.startTime,
      end: course.endTime,
      backgroundColor: "#2196F3",
      borderColor: "#1565C0",
      extendedProps: {
        professor : course.course.professor,
        classroom : `${course.classroom.matricule} (${course.classroom.capacity} max)`,
        site : `${course.site.name} (${course.site.university.name})`
      }
    })))
  };


  handleEventClick(eventClickInfo: any) {
    const selected = this.schedule.find((course) => course.id === eventClickInfo.event.id);

    if(selected){
      this.selectedCourse = selected
    }

  }




}
