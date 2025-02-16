import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {StudentsHomeComponent} from './pages/students-home/students-home.component';

const routes: Routes = [
  {path: '', component: StudentsHomeComponent},
  {path: 'schedule/:groupId', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
