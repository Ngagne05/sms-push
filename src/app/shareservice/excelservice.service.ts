import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { range } from 'rxjs';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelserviceService {

  constructor() { }

  public exportAsExcelFile(json: any[], headers: any[], finalHeaders: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json,
      { header: headers });

    const ranges = XLSX.utils.decode_range(worksheet['!ref']);
    console.log(ranges, ranges.s , ranges.s.r);
    let i = 0;
    for (let c = ranges.s.r; c <= ranges.e.c; ++c) {
      const address = XLSX.utils.encode_col(c) + '1';
      console.log(address);
      if (!worksheet[address]) {
        continue;
      } else {
        ++i;
        worksheet[address].v = finalHeaders[i - 1];
      }
    }
    // const workbook: XLSX.WorkBook = { Sheets: { excelFileName : worksheet }, SheetNames: [excelFileName] };
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, excelFileName);
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportAsExcelFileMultiSheet(json: any[], json2: any[], headers: any[],
    headers2: any[], finalHeaders: any[], finalHeaders2: any[], excelFileName: string,
     sheetname1: string, sheetname2: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json,
      { header: headers });
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json2, { header: headers2 });

    const ranges = XLSX.utils.decode_range(worksheet['!ref']);
    const ranges2 = XLSX.utils.decode_range(worksheet2['!ref']);

    let i = 0;
    for (let c = ranges.s.r; c <= ranges.e.c; ++c) {
      const address = XLSX.utils.encode_col(c) + '1';
      if (!worksheet[address]) {
        continue;
      } else {
        ++i;
        worksheet[address].v = finalHeaders[i - 1];
      }
    }
    i = 0;
    for (let c = ranges2.s.r; c <= ranges2.e.r; ++c) {
      const address = XLSX.utils.encode_col(c) + '1';
      if (!worksheet2[address]) {
        continue;
      } else {
        ++i;
        worksheet2[address].v = finalHeaders2[i - 1];
      }
    }
    // const workbook: XLSX.WorkBook = { Sheets: { sheetname1: worksheet, sheetname2: worksheet2 }, SheetNames: [sheetname1, sheetname2] };
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetname1);
    XLSX.utils.book_append_sheet(workbook, worksheet2, sheetname2);
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public exportAsExcelFileFromTable(element: any, headers: any[], finalHeaders: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const ranges = XLSX.utils.decode_range(worksheet['!ref']);
    let i = 0;
    for (let c = ranges.s.r; c <= ranges.e.c; ++c) {
      const address = XLSX.utils.encode_col(c) + '1';
      if (!worksheet[address]) {
        continue;
      } else {
        ++i;
        worksheet[address].v = finalHeaders[i - 1];
      }
    }
    // const workbook: XLSX.WorkBook = { Sheets: { excelFileName : worksheet }, SheetNames: [excelFileName] };
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, excelFileName);
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }


  public exportDirectlyAsExcelFileFromTableKPIs(element1: any,excelFileName: string): void {
    const worksheet1: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element1);
    
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet1, excelFileName);

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
}