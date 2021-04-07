import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";
import { LoginModel } from "@/model/LoginModel";

export class UserLoginForm implements IForm {
  public model: IModel;
  public saved: boolean;
  public valid: boolean;

  public constructor() {
    this.model = new LoginModel();
    this.saved = false;
    this.valid = false;
  }
}
