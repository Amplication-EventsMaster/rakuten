import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  events?: Array<Event>;
  firstNamr: string | null;
  id: string;
  updatedAt: Date;
};
