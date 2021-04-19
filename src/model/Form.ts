import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";

export abstract class Form implements IForm {
  public model!: IModel;
  public saved!: boolean;
  public valid!: boolean;
  public sending!: boolean;
  public error!: boolean;
  public send!: boolean;

  protected constructor() {
    this.error = false;
  }

  isSend(): boolean {
    return this.error || this.saved;
  }
}
