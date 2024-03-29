import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "firstNamr";

export const CustomerTitle = (record: TCustomer): string => {
  return record.firstNamr?.toString() || String(record.id);
};
