import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import { StudentNavComponent } from './layout/student-nav/student-nav.component';
import {MatCard, MatCardContent} from '@angular/material/card';
import {provideHttpClient} from '@angular/common/http';
import { EditTimeSlotComponent } from './components/edit-time-slot/edit-time-slot.component';
import {MatDialogActions, MatDialogTitle} from "@angular/material/dialog";
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    StudentNavComponent,
    EditTimeSlotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatIcon,
    MatButton,
    MatCard,
    MatCardContent,
    MatDialogTitle,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
