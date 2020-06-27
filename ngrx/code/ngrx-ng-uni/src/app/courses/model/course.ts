export interface Course {
  id: number;
  seqNo:number;
  url:string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}

export const compareCourses = (a: Course, b: Course): number => {
  return a.seqNo !== b.seqNo ? (a.seqNo > b.seqNo ? 1 : -1) : 0;
};
