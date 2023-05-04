export class PanelElement{
  header: string;
  warning: boolean;
  warningContent: string;
  correctContent: string;

  constructor(header: string, warning: boolean, warningContent: string, correctContent: string) {
    this.header = header;
    this.warning = warning;
    this.warningContent = warningContent;
    this.correctContent = correctContent;
  }
}
