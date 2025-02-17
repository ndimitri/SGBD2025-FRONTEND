import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { StudentsHomeComponent } from './pages/students-home/students-home.component';
import {MatList, MatListItem} from '@angular/material/list';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';

import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';




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
  ],
  providers: [
    provideHttpClient(),

  ],
})
export class StudentsModule { }
