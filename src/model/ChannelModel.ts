import { IModel } from "@/model/IModel";
import { IValidator } from "@/model/IValidator";
import { SettingsModel } from "@/model/SettingsModel";

export class ChannelModel implements IModel, IValidator {
  public id: number | null;
  public name = "";
  public description = "";
  public default = false;
  public settings?: SettingsModel | null;
  public subscribed = false;
  validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    this.id = null;
    this.settings = new SettingsModel();
    if (data !== undefined) {
      Object.assign(this, data);
    }

    this.validator = {
      name: [],
      default: [],
      description: [],
    };
  }

  public createArrayParams(): {
    id: number | null;
    name: string;
    description: string;
    default: boolean;
    settings: SettingsModel | null;
  } {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      default: this.default,
      settings: this.settings ?? null,
    };
  }
}
