import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCourseComponent } from './forms/create-course/create-course.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import { ScheduleAdminComponent } from './pages/schedule-admin/schedule-admin.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {MatList, MatListItem} from '@angular/material/list';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateCourseComponent,
    ScheduleAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatLabel,
    FullCalendarModule,
    MatList,
    MatListItem,
    FormsModule,
  ]
})
export class AdminModule { }
