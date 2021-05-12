import { IForm } from "@/model/IForm";
import { RestorePasswordModel } from "@/model/RestorePasswordModel";
import { Form } from "@/model/Form";

export class RestorePasswordForm extends Form implements IForm {
  public constructor(existingModel?: RestorePasswordModel) {
    super();
    this.model =
      existingModel === undefined ? new RestorePasswordModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
