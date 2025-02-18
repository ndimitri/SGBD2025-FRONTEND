export interface University {
  id: string;
  name: string;
}

export interface Site {
  id: string;
  name: string;
  university: University;
}

export interface Classroom {
  id: string;
  name: string;
  matricule: string;
  site: Site;
  capacity: number;
}

export interface Course {
  id: string;
  name: string;
  professor: string;
}

export interface Group {
  id: string;
  name: string;
  size: number;
  baseSite: Site;
}

export interface TimeSlot {
  id: string;
  course: Course;
  group: Group[];
  classroom: Classroom;
  site: Site;
  startTime: string;
  endTime: string;
}
