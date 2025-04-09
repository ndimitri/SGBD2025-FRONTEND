import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Site} from '../../../models/models';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-create-course',
  standalone: false,
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit{

  courseForm!: FormGroup;
  sites: Site[] = [];
  isSubmitting = false;

  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      weeklyHours: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
      siteId: ['', Validators.required],
      professor: ['', Validators.required],
    });

    this.loadData();
  }

  loadData() {
    this.courseService.getSites().subscribe((data) => (this.sites = data));
  }


  submitForm() {
    if (this.courseForm.invalid) return;

    this.isSubmitting = true;
    this.courseService.createCourse(this.courseForm.value).subscribe({
      next: (response) => {
        console.log('Cours créé avec succès', response);
        this.courseForm.reset(); // Réinitialiser le formulaire
      },
      error: (err) => {
        console.error('Erreur lors de la création du cours', err);
      },
      complete: () => (this.isSubmitting = false),
    });
  }


}
