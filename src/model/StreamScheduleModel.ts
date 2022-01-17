import { IModel } from "@/model/IModel";
import { StreamModel } from "@/model/StreamModel";

export class StreamScheduleModel implements IModel {
  public id = null;
  public createdAt = null;
  public stream?: StreamModel | null;

  public constructor(data?: Record<any, any>) {
    if (data !== undefined) {
      this.id = data.id;
      this.createdAt = data.createdAt;
      this.stream = new StreamModel(data.stream);
    }
  }

  public createArrayParams(): Record<never, string> {
    return {};
  }
}
