export interface Me {
  id: number;
  name: string;
  surname: string;
  profession: string;
  experience: number;
  description: string;
  email: string;
  phone: string;
  imageurl: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
}
