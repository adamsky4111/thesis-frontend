import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";
import { LoginModel } from "@/model/LoginModel";

export class UserLoginForm implements IForm {
  public model: IModel;
  public saved: boolean;
  public valid: boolean;
  public sending: boolean;

  public constructor(existingModel?: LoginModel) {
    this.model = existingModel === undefined ? new LoginModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
