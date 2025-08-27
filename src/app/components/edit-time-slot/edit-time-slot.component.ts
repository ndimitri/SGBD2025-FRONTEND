import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Classroom, Course, Site, TimeSlot} from '../../models/models';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ScheduledCourseService} from '../../students/services/scheduled-course.service';
import {TimeSlotUpdateForm} from '../../models/forms';
import {ClassroomService} from '../../admin/services/classroom.service';

@Component({
  selector: 'app-edit-time-slot',
  standalone: false,
  templateUrl: './edit-time-slot.component.html',
  styleUrl: './edit-time-slot.component.css'
})
export class EditTimeSlotComponent {

  editForm!: FormGroup;
  isSubmitting = false; // Pour désactiver le bouton "Sauvegarder" pendant la requête

  classrooms : Classroom[] = [];
  selectedSite : Site | null = null;



  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTimeSlotComponent>,
    private snackBar: MatSnackBar,
    private scheduledCourseService: ScheduledCourseService,
    private classroomService : ClassroomService,

    @Inject(MAT_DIALOG_DATA) public data: TimeSlot
  ) {

  }

  ngOnInit() {
    this.classroomService.getClassrooms().subscribe({
      next: (res) => (this.classrooms = res),
      error: (err) => console.error(err)
    });


    this.editForm = this.fb.group({
      // courseId: [data.course.id, Validators.required],
      // professor: [data.course.professor],
      classroomId: [this.data.classroom.id, Validators.required],
      // siteId: [data.site.id, Validators.required],
      startTime: [this.data.startTime, Validators.required],
      endTime: [this.data.endTime, Validators.required]
    });
  }

  onClassroomChange(classroomId : string) {
    const selectedClassroom = this.classrooms.find(c => c.id === classroomId);
    this.selectedSite = selectedClassroom?.site || null;
  }


  onSave() {
    if (this.editForm.invalid) return;

    this.isSubmitting = true;
    // const updatedSlot = { ...this.data, ...this.editForm.value };

    const updatedSlot : TimeSlotUpdateForm = {
      id: this.data.id, // Id du créneau
      startTime: this.editForm.value.startTime,
      endTime: this.editForm.value.endTime,
      // professor: this.data.course.professor,
      classroomId: this.editForm.value.classroomId,
      courseId: this.data.course.id,
      studentGroupsIds: this.data.groups.map(g => g.id)
    }

    console.log('Updated Slot:', updatedSlot);

    // Si dispo, on update le créneau
    this.scheduledCourseService.updateTimeSlot(updatedSlot).subscribe({
      next: () => {
        this.snackBar.open('Créneau mis à jour avec succès !', 'Fermer', { duration: 3000 });
        this.dialogRef.close(updatedSlot);
      },
      error: () => {
        this.snackBar.open('Erreur lors de la mise à jour du créneau.', 'Fermer', { duration: 3000 });
        this.isSubmitting = false;
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
