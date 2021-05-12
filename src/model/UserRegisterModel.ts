import { UserModel } from "@/model/UserModel";
import { IValidator } from "@/model/IValidator";
import validators from "@/validators/common";

export class UserRegisterModel extends UserModel implements IValidator {
  public repeatPassword?: string;
  public validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    super(data);
    this.validator = {
      email: validators.email,
      username: validators.empty.concat(validators.noSpace),
      password: validators.empty,
      repeatPassword: validators.empty.concat([
        () =>
          this.repeatPassword === this.password || "Hasła muszą być identyczne",
      ]),
      about: [],
      country: [],
      nick: [],
      firstName: validators.firstUpper,
      lastName: validators.firstUpper,
    };
  }
}
