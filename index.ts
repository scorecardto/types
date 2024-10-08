import { createContext, Dispatch, SetStateAction } from "react";

export type Appearance = "LIGHT" | "DARK" | "SYSTEM";
export type AccentColor = "BLUE" | "PINK";
export type SpoilerMode = boolean;
export type CheckGradesInterval = 10 | 20 | 30 | 45 | 60 | 180 | 360;
export type UsePushNotifications  = boolean;
export type DeleteNotificationsAfter  = 0 | 2 | 5 | 14 | 30;


export const SettingsContext = createContext<SettingsProvider>({
  appearance: "LIGHT",
  setAppearance: () => {
    /* do nothing */
  },
  accentColor: "BLUE",
  setAccentColor: () => {
    /* do nothing */
  },
  spoilerMode: false,
  setSpoilerMode: () => {
    /* do nothing */
  },
  checkGradesInterval: 10,
  setCheckGradesInterval: () => {
    /* do nothing */
  },
  usePushNotifications: false,
  setUsePushNotifications: () => {
    /* do nothing */
  },
  deleteNotificationsAfter: 0,
  setDeleteNotificationsAfter: () => {
    /* do nothing */
  },
  loaded: false,
  setLoaded: () => {
    /* do nothing */
  }
});

export interface Settings {
  appearance: Appearance;
  accentColor: AccentColor;
  spoilerMode: SpoilerMode;
  checkGradesInterval: CheckGradesInterval;
  usePushNotifications: UsePushNotifications;
  deleteNotificationsAfter: DeleteNotificationsAfter;
}
export interface SettingsProvider extends Settings {
  setAppearance: Dispatch<SetStateAction<Appearance>>;
  setAccentColor: Dispatch<SetStateAction<AccentColor>>;
  setSpoilerMode: Dispatch<SetStateAction<SpoilerMode>>;
  setCheckGradesInterval: Dispatch<SetStateAction<CheckGradesInterval>>;
  setUsePushNotifications: Dispatch<SetStateAction<UsePushNotifications>>;
  setDeleteNotificationsAfter: Dispatch<SetStateAction<DeleteNotificationsAfter>>;

  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
};

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
  courseSettings: {},
  setCourseSettings: () => {
    /* do nothing */
  },
  courseOrder: null,
  setCourseOrder: () => {
    /* do nothing */
  },
});

export const NotificationContext = createContext<NotificationProvider>({
  notifications: [],
  unreadNotifications: [],
  markRead: () => {
    /* do nothing */
  },
  setNotifications: () => {
    /* do nothing */
  }
});

export interface DataProvider {
  gradeCategory: number;
  setGradeCategory: Dispatch<SetStateAction<number>>;
  data: GradebookRecord | null;
  setData: Dispatch<SetStateAction<GradebookRecord | null>>;
  courseSettings: { [key: string]: CourseSettings };
  setCourseSettings: Dispatch<SetStateAction<{ [key: string]: CourseSettings }>>;
  courseOrder: string[] | null;
  setCourseOrder: Dispatch<SetStateAction<string[] | null>>;
};

export interface CourseSettings {
  displayName?: string;
  lastUpdated?: number;
  hidden?: boolean;
  accentColor?: string;
  glyph?: string;
}

export interface GradebookNotification {
  id?: number;
  icon: "RISE" | "FALL" | "NEUTRAL";
  title: string;
  message: string;
  date: number;
  read: boolean;
  course?: string;
}

export interface NotificationProvider {
  notifications: GradebookNotification[];
  setNotifications: Dispatch<SetStateAction<GradebookNotification[]>>;
  unreadNotifications: GradebookNotification[];
  // @ts-ignore
  markRead(port?: chrome.runtime.Port): void;
};

export interface GradebookRecord {
  gradeCategoryNames: string[];
  date: number;
  courses: Course[];
  gradeCategory: number;
}

export interface CourseGrade {
  value: string;
  key: string;
  active: boolean;
};

export interface Course {
  key: string;
  name: string;
  teacher?: {name: string, email?: string};
  room?: string;
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

export interface ClubBase {
  name: string;
  clubCode: string;
  internalCode: string;
  picture?: string;
  verified?: boolean;
  official?: boolean;
  heroColor?: string;
  emoji?: string;
}

export interface Club extends ClubBase {
  isMember: boolean;
  isOwner: boolean;
  isManager?: boolean;
  canManage?: boolean;
  memberCount: number;
  bio?: string;
  link?: string;
  posts: ClubPost[];
  omitInClubList?: boolean;
}

export interface ClubPost {
  club: ClubBase
  content: string;
  postDate: number;
  eventDate?: number;
  picture?: string;
  link?: string;
}

export interface School {
  uniqueName: string;
  name: string;
  displayName?: string;
  district: string;
  verified: boolean;
}

export type PromotionOption = "BASIC" | "PROMOTE";

export interface ClubPostInternal extends ClubPost {
  promotionOption: PromotionOption;
}

export interface ClubMembershipBase {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  manager?: boolean;
  owner?: boolean;
  id?: number;
}

export interface ClubEnrollmentBase {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}
