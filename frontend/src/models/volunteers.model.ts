export interface Volunteer {
  _id: string;
  firstName: string;
  lastName: string;
  tz: string;
  email: string;
  phone: string;
  specialties?: string[];
}
