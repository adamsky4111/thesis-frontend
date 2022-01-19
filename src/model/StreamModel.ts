import { IModel } from "@/model/IModel";
import { IValidator } from "@/model/IValidator";
import { SettingsModel } from "@/model/SettingsModel";
import { ChannelModel } from "@/model/ChannelModel";
import { MediaModel } from "@/model/MediaModel";

export class StreamModel implements IModel, IValidator {
  public id: number | null;
  public name = "";
  public description = "";
  public startingAt: Date | null = new Date();
  public endingAt: Date | null = new Date();
  public settings?: SettingsModel | null;
  public channel?: ChannelModel | null;
  public watchersCount?: number | null;
  public images?: Array<MediaModel>;
  public startNow = false;
  validator: Record<never, Array<never>>;

  public constructor(data?: Record<any, any>) {
    this.id = null;
    this.settings = null;
    this.watchersCount = 0;
    this.images = new Array<MediaModel>();
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
    startNow: boolean;
    startingAt: Date | null;
    endingAt: Date;
    settings: SettingsModel | null;
  } {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      startNow: this.startNow,
      startingAt: this.startingAt as Date,
      endingAt: this.endingAt as Date,
      settings: this.settings ?? null,
    };
  }
}
