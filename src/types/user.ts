export interface User {
  id: number;
  nickname: string;
  email: string;
  googleAccount: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  splitType: string;
  audioCoach: string;
  speed: string;
  explanation: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}