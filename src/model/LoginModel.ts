import { UserModel } from "@/model/UserModel";
import { IValidator } from "@/model/IValidator";
import validators from "@/validators/common";

export class LoginModel extends UserModel implements IValidator {
  public validator: Record<never, Array<never>>;

  constructor() {
    super();
    this.validator = {
      username: validators.empty,
      password: validators.empty,
    };
  }

  public createArrayParams(): Record<never, string> {
    return {
      username: this.username,
      password: this.password,
    };
  }
}
