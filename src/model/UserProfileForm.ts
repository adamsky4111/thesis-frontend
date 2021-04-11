import { IModel } from "@/model/IModel";
import { IForm } from "@/model/IForm";
import { UserProfileModel } from "@/model/UserProfileModel";

export class UserProfileForm implements IForm {
  public model: IModel;
  public saved: boolean;
  public valid: boolean;

  public constructor() {
    this.model = new UserProfileModel();
    this.saved = false;
    this.valid = false;
  }
}
