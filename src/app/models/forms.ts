export interface TimeSlotUpdateForm {
  id: string; // Id du créneau
  startTime: string;  // ISO date string (par exemple, '2025-04-09T14:00:00')
  endTime: string;    // ISO date string
  professor?: string; // Si ce champ est optionnel, le rendre facultatif
  classroomId?: string; // Id de la salle de classe
  courseId?: string;  // Id du cours
  studentGroupId?: string; // Id du groupe d'étudiants
}
