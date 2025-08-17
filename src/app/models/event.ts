
export class Event {

    private title!: string;
    private description!: string[];
    private date !: Date;
    private pictureUrl !: string;
    private price: number;

  constructor(title: string, description: string[], date: Date, pictureUrl: string, price: number = 0) {
    this.title = title;
    this.description = description;
    this.date = date;   
    this.pictureUrl = pictureUrl;
    this.price = price;
  }

  getTitle(): string {
    return this.title;
  } 

  getDescription(): string[] {
    return this.description;
  }

  getDate(): Date {
    return this.date;
  }

  getPictureUrl(): string {
    return this.pictureUrl;
  }

  getPrice(): number {
    return this.price;
  }

}   