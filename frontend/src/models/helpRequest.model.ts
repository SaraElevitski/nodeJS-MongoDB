
export interface HelpRequest {
   _id: number | '';
  location: RequestLocation;
  problemDescription: string;
  contactPhone: string;
  status: number | '';
  peopleStuck: number | '';
  priority: number | '';
  volunteerCode: string;
}

export interface RequestLocation {
  areaCode: number | '';
  name: string;
}



export const requestStatusesLabels: Record<number, string> ={
  1:'ממתין',
2:'בטיפול',
3:'הסתיים'
}


export const priorityLabels: Record<number, string> = {
  1: 'נמוכה',
  2: 'בינונית',
  3: 'גבוהה',
  4: 'קריטית',
};


