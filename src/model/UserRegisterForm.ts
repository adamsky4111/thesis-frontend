import { UserRegisterModel } from "@/model/UserRegisterModel";
import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";

export class UserRegisterForm implements IForm {
  public model: IModel;
  public saved: boolean;
  public valid: boolean;

  public constructor() {
    this.model = new UserRegisterModel();
    this.saved = false;
    this.valid = false;
  }
}
