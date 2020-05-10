import { Goal } from "./goal.model";

export interface Dream {
  ID: number;
  name: string;
  description: string;
  goals: Goal[];
  isPrivate: boolean;
  upvote: number;
  progress: number;
  status: string;
  user: string;
  createdAt: any;
}
