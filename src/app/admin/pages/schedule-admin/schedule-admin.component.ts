import {Component, OnInit} from '@angular/core';
import {Classroom, Site, TimeSlot} from '../../../models/models';
import {CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ActivatedRoute} from '@angular/router';
import {ScheduledCourseService} from '../../../students/services/scheduled-course.service';
import { MatDialog } from '@angular/material/dialog';
import {EditTimeSlotComponent} from '../../../components/edit-time-slot/edit-time-slot.component';

@Component({
  selector: 'app-schedule-admin',
  standalone: false,
  templateUrl: './schedule-admin.component.html',
  styleUrl: './schedule-admin.component.css'
})
export class ScheduleAdminComponent implements OnInit{

  groupId!: string | null;
  schedule! : TimeSlot[];
  selectedCourse: TimeSlot | any = null;

  isEditModalOpen = false;
  editedSlot: any = {};
  classrooms: Classroom[] = [];  // Liste des salles récupérées depuis le backend
  sites: Site[] = [];  // Liste des sites récupérées depuis le backend

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



  constructor(private route: ActivatedRoute, private scheduleService: ScheduledCourseService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    if (this.groupId) {
      this.loadSchedule(this.groupId);
    }

  }

  openEditDialog(timeSlot: TimeSlot) {
    const dialogRef = this.dialog.open(EditTimeSlotComponent, {
      width: '400px',
      data: timeSlot
    });

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
