import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CreateCourseComponent} from './forms/create-course/create-course.component';
import {ScheduleComponent} from '../students/pages/schedule/schedule.component';
import {ScheduleAdminComponent} from './pages/schedule-admin/schedule-admin.component';
import {GenerateScheduleComponent} from './pages/generate-schedule/generate-schedule.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'schedule/:groupId', component: ScheduleAdminComponent},
  {path: 'generate-schedule', component: GenerateScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
