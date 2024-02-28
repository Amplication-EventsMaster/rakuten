import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstNamr?: string | null;
};
