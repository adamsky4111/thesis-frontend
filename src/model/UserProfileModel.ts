import { IModel } from "@/model/IModel";
import { IValidator } from "@/model/IValidator";
import validators from "@/validators/common";

export class UserProfileModel implements IModel, IValidator {
  public firstName: string | undefined;
  public lastName: string | undefined;
  public nick: string | undefined;
  public country: string | undefined;
  public about: string | undefined;
  public validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    if (data !== undefined) {
      Object.assign(this, data);
    }
    this.validator = {
      about: [],
      country: [],
      nick: validators.noSpace,
      firstName: validators.firstUpper,
      lastName: validators.firstUpper,
    };
  }

  public createArrayParams(): Record<never, string> {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      nick: this.nick,
      country: this.country,
      about: this.about,
    };
  }
}
