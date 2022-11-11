import { createContext, Dispatch, SetStateAction } from "react";

export const LoadingContext = createContext<LoadingProvider>({
  loading: false,
  setLoading: () => {
    /* do nothing */
  },
  reloadContent: () => {
    /* do nothing */
  },
});

export interface LoadingProvider {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  reloadContent: () => void;
};


export const DataContext = createContext<DataProvider>({
  data: null,
  setData: () => {
    /* do nothing */
  },
  gradeCategory: 0,
  setGradeCategory: () => {
    /* do nothing */
  },
  courseNames: {
  },
  setCourseName: () => {
    /* do nothing */
  }
});

export interface DataProvider {
  gradeCategory: number;
  setGradeCategory: Dispatch<SetStateAction<number>>;
  data: GradebookRecord | null;
  setData: Dispatch<SetStateAction<GradebookRecord | null>>;
  courseNames: { 
    [courseKey: string]: string;
  };
  setCourseName(key: string, name: string);

};

export interface GradebookRecord {
  gradeCategoryNames: string[];
  date: number;
  courses: Course[];
}

export interface CourseGrade {
  value: string;
  key: string;
  active: boolean;
};

export interface Course {
  key: string;
  name: string;
  grades: (CourseGrade | null)[];
  gradeCategories?: GradeCategory[]; // sometimes don't want to send this
}

export interface GradeCategory {
  name: string;
  id: string;
  average: string;
  weight: number;
  error: boolean;
  assignments?: Assignment[]; // sometimes don't want to send this
}

export interface Assignment {
  name?: string;
  points?: number;
  grade?: string;
  dropped: boolean;
  assign?: string;
  due?: string;
  scale?: number;
  max?: number;
  count?: number;
  note?: string;
  error: boolean;
}

export interface CourseResponse {
  courses: Course[];
  sessionId: string;
  referer: string;
  gradeCategoryNames: string[];
}

export interface GradeCategoriesResponse {
  sessionId: string;
  referer: string;
  gradeCategories: GradeCategory[];
}

export interface AllCoursesResponse {
  sessionId: string;
  referer: string;
  courses: Course[];
}

export interface AllContentResponse extends AllCoursesResponse {
   gradeCategoryNames: string[];
};

export interface SetupState {
  host: string;
  username: string;
  hasPassword: boolean;
}