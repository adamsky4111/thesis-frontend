import { IModel } from "@/model/IModel";
import { SettingsModel } from "@/model/SettingsModel";

export class MessageModel implements IModel {
  public id: number | null;
  public nick = "";
  public avatar: string | null = null;
  public createdAt: string | null = null;
  public text = "";
  public username: string | null = null;
  public chatId: number | null = null;

  public constructor(data?: Record<any, any>) {
    this.id = null;
    if (data !== undefined) {
      Object.assign(this, data);
    }
  }

  public createArrayParams(): {
    text: string;
  } {
    return {
      text: this.text,
    };
  }
}
