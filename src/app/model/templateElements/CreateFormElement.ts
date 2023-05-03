export class CreateFormElement{
  title: string;
  type: string;
  model: any;
  name: string;
  valid: boolean;
  invalidMessage: string;
  options?: any[];


  constructor(title: string, type: string, model: any, name: string, valid: boolean, invalidMessage: string, options?: any[][]) {
    this.title = title;
    this.type = type;
    this.model = model;
    this.name = name;
    this.valid = valid;
    this.invalidMessage = invalidMessage;
    this.options = options;
  }

}
