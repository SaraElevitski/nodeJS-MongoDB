export interface HelpRequests {
  
}

// 1. הגדרת ה-Enum של הדחיפות
export const Priority = {
  Low : 1,
  Medium :2,
  High : 3,
  Critical : 4
} as const;

export type PriorityType = typeof Priority[keyof typeof Priority];

// 2. אובייקט התרגום (הקונוורטר) לקבלת טקסט יפה
export const priorityLabels: Record<PriorityType, string> = {
  [Priority.Low]: "🟢 נמוכה",
  [Priority.Medium]: "🟡 בינונית",
  [Priority.High]: "🔴 גבוהה",
  [Priority.Critical]: "🔥קריטית"
};

