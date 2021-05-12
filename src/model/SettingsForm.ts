import { IForm } from "@/model/IForm";
import { Form } from "@/model/Form";
import { SettingsModel } from "@/model/SettingsModel";

export class SettingsForm extends Form implements IForm {
  public constructor(existingModel?: SettingsModel) {
    super();
    this.model =
      existingModel === undefined ? new SettingsModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
