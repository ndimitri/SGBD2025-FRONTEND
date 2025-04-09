import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TimeSlot} from '../../models/models';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ScheduledCourseService} from '../../students/services/scheduled-course.service';
import {TimeSlotUpdateForm} from '../../models/forms';

@Component({
  selector: 'app-edit-time-slot',
  standalone: false,
  templateUrl: './edit-time-slot.component.html',
  styleUrl: './edit-time-slot.component.css'
})
export class EditTimeSlotComponent {

  editForm: FormGroup;
  isSubmitting = false; // Pour désactiver le bouton "Sauvegarder" pendant la requête


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTimeSlotComponent>,
    private snackBar: MatSnackBar,
    private scheduledCourseService: ScheduledCourseService,
    @Inject(MAT_DIALOG_DATA) public data: TimeSlot
  ) {
    this.editForm = this.fb.group({
      courseId: [data.course.id, Validators.required],
      professor: [data.course.professor, Validators.required],
      classroomId: [data.classroom.id, Validators.required],
      siteId: [data.site.id, Validators.required],
      startTime: [data.startTime, Validators.required],
      endTime: [data.endTime, Validators.required]
    });
  }

  onSave() {
    if (this.editForm.invalid) return;

    this.isSubmitting = true;
    const updatedSlot = { ...this.data, ...this.editForm.value };

    const slot : TimeSlotUpdateForm = {
      id: updatedSlot.id, // Id du créneau
      startTime: updatedSlot.startTime,
      endTime: updatedSlot.endTime,
      professor: updatedSlot.professor,
      classroomId: updatedSlot.classroomId,
      courseId: updatedSlot.courseId,
      studentGroupId: updatedSlot.studentGroupId
    }

    console.log('Updated Slot:', slot);

    // Si dispo, on update le créneau
    this.scheduledCourseService.updateTimeSlot(slot).subscribe({
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
