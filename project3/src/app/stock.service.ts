import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { TableInformation } from './tableinformation';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  //取得責任中心代碼
  getDepartNo(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetDepartmentInfos')
  }
  //取得庫存分類選項
  getOptionInfo(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetOptionInfos/MatStockMt/invType')
  }
  //取得表單資訊
  getTable(info: TableInformation): Observable<Array<any>> {
    return this.http.put<Array<any>>('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetMatStockTakings', JSON.stringify(info), this.httpOptions)
  }
  //取得使用者責任中心代碼
  getUserDepartNo(): Observable<any> {
    return this.http.get<any>('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatDemand/GetMatStockItem/A59463')
  }
}
