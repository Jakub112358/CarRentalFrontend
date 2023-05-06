export class CreateFormElement{
  title: string;
  type: string;
  model: any;
  name: string;
  valid: boolean;
  invalidMessage: string;
  options: any[];
  minDate: Date;



  constructor(title: string, type: string, model: any, name: string, valid: boolean, invalidMessage: string, options?: any[][], minDate?: Date) {
    this.title = title;
    this.type = type;
    this.model = model;
    this.name = name;
    this.valid = valid;
    this.invalidMessage = invalidMessage;
    this.options = options ? options : [];
    this.minDate = minDate ? minDate : new Date(0);
  }

}
