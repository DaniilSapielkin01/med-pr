export interface IDoctors {
  id: number;
  isChief?: boolean;
  specialty: string;
  name: string;
  avatar: string;
  shortSpecialty?: string;
  experience?: string;
  education?: string;
  specialization?: string;
  directions?: string[];
}
