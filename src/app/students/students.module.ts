import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { StudentsHomeComponent } from './pages/students-home/students-home.component';
import {MatList, MatListItem} from '@angular/material/list';
import {MatFormField,  MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect,} from '@angular/material/select';

import {
  MatAccordion,
  MatExpansionModule,
} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import { provideHttpClient} from '@angular/common/http';
import {FullCalendarModule} from '@fullcalendar/angular';
import {MatButtonToggle} from '@angular/material/button-toggle';




@NgModule({
  declarations: [
    ScheduleComponent,
    StudentsHomeComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatList,
    MatListItem,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatAccordion,
    MatExpansionModule,
    MatIcon,
    FullCalendarModule,

  ],
  providers: [
    provideHttpClient(),

  ],
})
export class StudentsModule { }
