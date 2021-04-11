import { IModel } from "@/model/IModel";

export class UserModel implements IModel {
  public username = "";
  public email = "";
  public password = "";
  public firstName = "";
  public lastName = "";
  public nick = "";
  public country = "";
  public about = "";

  public constructor(data?: Record<any, any>) {
    if (data !== undefined) {
      Object.assign(this, data);
    }
  }

  public createArrayParams(): Record<never, string> {
    return {
      username: this.username,
      email: this.email,
      plainPassword: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      nick: this.nick,
      country: this.country,
      about: this.about,
    };
  }
}
