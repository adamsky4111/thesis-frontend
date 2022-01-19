export class MediaModel {
  public id: number | null;
  public filename = "";
  public path = "";
  public size: number | null = null;

  public constructor(data?: Record<any, any>) {
    this.id = null;
    if (data !== undefined) {
      Object.assign(this, data);
    }
  }
}
