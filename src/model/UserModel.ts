import { IModel } from "@/model/IModel";

export class UserModel implements IModel {
  public username?: string;
  public email?: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public nick?: string;
  public country?: string;
  public about?: string;

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
