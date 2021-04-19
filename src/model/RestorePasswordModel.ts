import { IModel } from "@/model/IModel";
import { IValidator } from "@/model/IValidator";
import validators from "@/validators/common";

export class RestorePasswordModel implements IModel, IValidator {
  public email = "";
  public validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    if (data !== undefined) {
      Object.assign(this, data);
    }

    this.validator = {
      email: validators.email,
    };
  }

  public createArrayParams(): Record<never, string> {
    return {
      email: this.email,
    };
  }
}
