import { IForm } from "@/model/IForm";
import { Form } from "@/model/Form";
import { StreamModel } from "@/model/StreamModel";

export class StreamForm extends Form implements IForm {
  public constructor(existingModel?: StreamModel) {
    super();
    this.model =
      existingModel === undefined ? new StreamModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
