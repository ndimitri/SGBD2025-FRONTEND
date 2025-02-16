import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { StudentsHomeComponent } from './pages/students-home/students-home.component';
import {MatList, MatListItem} from '@angular/material/list';


@NgModule({
  declarations: [
    ScheduleComponent,
    StudentsHomeComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatList,
    MatListItem
  ]
})
export class StudentsModule { }
