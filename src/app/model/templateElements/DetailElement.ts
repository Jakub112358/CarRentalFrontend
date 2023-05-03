export class DetailElement {
  title: string;
  value: any;
  displayEditButton: boolean;
  name: string


  constructor(title: string, value: any, displayEditButton: boolean, name: string) {
    this.title = title;
    this.value = value;
    this.displayEditButton = displayEditButton;
    this.name = name;
  }
}
