import { IModel } from "@/model/IModel";
import { IValidator } from "@/model/IValidator";
import validators from "@/validators/common";

export class UserPasswordModel implements IModel, IValidator {
  public email = "";
  public password = "";
  public repeatPassword = "";
  public token = "";
  public validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    if (data !== undefined) {
      Object.assign(this, data);
    }

    this.validator = {
      email: validators.email,
      password: validators.empty,
      repeatPassword: validators.empty.concat([
        () =>
          this.repeatPassword === this.password || "Hasła muszą być identyczne",
      ]),
    };
  }

  public createArrayParams(): {
    token: string;
    email: string;
    password: string;
  } {
    return {
      token: this.token,
      email: this.email,
      password: this.password,
    };
  }
}
