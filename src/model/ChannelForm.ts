import { IForm } from "@/model/IForm";
import { Form } from "@/model/Form";
import { ChannelModel } from "@/model/ChannelModel";

export class ChannelForm extends Form implements IForm {
  public constructor(existingModel?: ChannelModel) {
    super();
    this.model =
      existingModel === undefined ? new ChannelModel() : existingModel;
    this.saved = false;
    this.valid = false;
    this.sending = false;
  }
}
