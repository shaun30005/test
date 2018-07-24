export class TableInformation {
  stockNo: string;
  invType: string;
  inputValue: string;
  isAllBranch: boolean;
  invListEnable: boolean;
  constructor() {
    this.stockNo = '';
    this.inputValue = '';
    this.invType = '0';
    this.isAllBranch = false;
    this.invListEnable = false;
  }
}

