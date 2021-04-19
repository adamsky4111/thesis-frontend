import { IForm } from "@/model/IForm";
import { Form } from "@/model/Form";
import { UserPasswordModel } from "@/model/UserPasswordModel";

export class UserPasswordForm extends Form implements IForm {
  public constructor(existingModel?: UserPasswordModel) {
    super();
    this.model =
      existingModel === undefined ? new UserPasswordModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
