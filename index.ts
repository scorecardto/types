export interface CourseGrade {
  value: string;
  key: string;
  active: boolean;
};

export interface Course {
  key: string;
  name: string;
  grades: (CourseGrade | null)[];
}

export interface CourseAssignments extends Course {
  categories: CategoryDetails[];
}

export interface CourseResponse {
  courses: Course[];
  sessionId: string;
  referer: string;
  columnNames: string[];
}

export interface Category extends CategoryDetails {
  assignments: Assignment[];
}

export interface CategoryDetails {
  name: string;
  id: string;
  average: string;
  weight: number;
  error: boolean;
}

export interface Assignment {
  name?: string;
  grade?: number;
  dropped: boolean;
  assign?: string;
  due?: string;
  scale?: number;
  max?: number;
  count?: number;
  note?: string;
  error: boolean;
}

export interface CourseAssignmentsResponse {
  sessionId: string;
  referer: string;
  categories: Category[];
}

export interface AssignmentsAllCoursesResponse {
  sessionId: string;
  referer: string;
  courses: CourseAssignments[];
}

export interface GradebookRecord {
  gradingPeriods: string[];
  date: number;
  data: CourseAssignments[];
}

export interface AllContentResponse extends AssignmentsAllCoursesResponse {
   gradingPeriods: string[];
};
