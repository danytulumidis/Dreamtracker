export type status = "requested" | "accepted" | "declined";

export interface Friendship {
  userA: string;
  userB: string;
  created: string;
  status: status;
}
