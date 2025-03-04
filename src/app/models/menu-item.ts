
export class MenuItem {

    private text!: string;
    private route!: string;

  constructor(text: string, route: string
  ) {
    this.text = text;
    this.route = route;
  }

  getRoute(): string {
    return this.route;
  } 

  getText(): string {
    return this.text;
  }     

}   