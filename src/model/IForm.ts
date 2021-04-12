import { IModel } from "@/model/IModel";

export interface IForm {
  saved: boolean;
  valid: boolean;
  model: IModel;
  sending: boolean;
}
