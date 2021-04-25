import { IModel } from "@/model/IModel";

export class SettingsModel implements IModel {
  public id: number | null;
  public name = "";
  public ageAllowed: number | null = null;
  public isDefault = false;

  public constructor(data?: Record<any, any>) {
    this.id = null;
    if (data !== undefined) {
      Object.assign(this, data);
    }
  }

  public createArrayParams(): {
    id: number | null;
    name: string;
    ageAllowed: number;
    isDefault: boolean;
  } {
    return {
      id: this.id,
      name: this.name,
      ageAllowed: parseInt(String(this.ageAllowed)),
      isDefault: this.isDefault,
    };
  }
}
