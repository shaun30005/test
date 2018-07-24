import { Component, OnInit, Input } from '@angular/core';
import { StockService } from './stock.service';
import { SelectItem } from 'primeng/primeng';
import { TableInformation } from './tableinformation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private stockService: StockService) { }

  departNos: SelectItem[];
  selectedDepartNo: any;
  options: SelectItem[];
  selectedOption: string;
  tables: SelectItem[];
  cols: any[];
  tableInformation = new TableInformation();
  medi: any;

  ngOnInit() {
    this.setDepartInfo();
    this.setOption();
    this.cols = [
      { field: 'medCode', header: '衛材代碼' },
      { field: 'matName', header: '衛材名稱' },
      { field: 'totalQty', header: '目前庫存量' },
      { field: 'qty', header: '盤點數量' },
      { field: 'diff', header: '數量差異' },
      { field: 'ratioUnitName', header: '庫存單位' },
      { field: 'invTypeName', header: '庫存分類' },
      { field: 'storageNo', header: '儲位號' }
    ]
  }
  //設定責任中心
  setDepartInfo() {
    this.stockService.getDepartNo().subscribe(departNo => {
      departNo.forEach(item => {
        item.label = `${item.departNo} - ${item.shortName}`;
        item.value = item.departNo;
      })
      this.departNos = departNo;
      this.setUserDepartinfo();
    });
  }
  //設定預設選項
  setOption() {
    this.stockService.getOptionInfo().subscribe(option => {
      option.forEach(item => {
        item.label = item.value;
        item.value = item.code;
      })
      option.unshift({ label: '全部', code: '0' })
      this.options = option;
    });
  }
  //設定使用者責任中心
  setUserDepartinfo() {
    this.stockService.getUserDepartNo().subscribe(userNo => {
      this.selectedDepartNo = userNo.stockNo;
      this.setTable(this.tableInformation);
    });
  }
  //設定表單
  setTable(tableInformation) {
    tableInformation.stockNo = this.selectedDepartNo;
    tableInformation.inputValue = this.tableInformation.inputValue;
    this.stockService.getTable(tableInformation).subscribe(table => {
      table.forEach(item => {
        item.qty = item.totalQty;
        item.diff = item.qty - item.totalQty;
      });
      this.medi = table;
    });
  }
  click() {
    this.tableInformation.stockNo = this.selectedDepartNo;
    this.tableInformation.invType = this.selectedOption;
    this.setTable(this.tableInformation);
  }
  keyup(medi: any) {
    if (isNaN(medi.qty)) {
      medi.diff = 0
    } else {
      medi.diff = medi.qty - medi.totalQty
    }
  }
}