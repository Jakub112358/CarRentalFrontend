export class DetailElement {
  title: string;
  value: any;
  displayEditButton: boolean;
  name: string
  picture?: boolean;


  constructor(title: string, value: any, displayEditButton: boolean, name: string, picture?: boolean) {
    this.title = title;
    this.value = value;
    this.displayEditButton = displayEditButton;
    this.name = name;
    this.picture = picture
  }
}
