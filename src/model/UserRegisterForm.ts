import { UserRegisterModel } from "@/model/UserRegisterModel";
import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";

export class UserRegisterForm implements IForm {
  public model: IModel;
  public saved: boolean;
  public valid: boolean;
  public sending: boolean;

  public constructor(existingModel?: UserRegisterModel) {
    this.model =
      existingModel === undefined ? new UserRegisterModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
