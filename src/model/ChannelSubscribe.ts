import { ChannelModel } from "@/model/ChannelModel";

export class ChannelSubscribe {
  public id: number | null;
  public createdAt: Date | null = new Date();
  public channel: ChannelModel | null = null;
  public constructor(data?: Record<any, any>) {
    this.id = null;
    if (data !== undefined) {
      Object.assign(this, data);
    }
  }
}
