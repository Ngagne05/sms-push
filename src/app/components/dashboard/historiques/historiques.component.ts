import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelserviceService } from 'src/app/shareservice/excelservice.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  displayedColumns: string[] = [
    `id`,
    `receiver`,
    `status`,
    `last_update`,
    "ret_id"
  ];
  dataSource: MatTableDataSource<any>;

  data: any[] = [
    {
      id: 1,
      receiver: "+221774418558",
      push_id: "741258",
      status: "received",
      last_update: "10/04/2020 11:12:54",
      ret_id: "123456"
    },
    {
      id: 2,
      receiver: "+221774412332",
      push_id: "741258",
      status: "received",
      last_update: "10/04/2020 12:15:25",
      ret_id: "123456"
    },
    {
      id: 3,
      receiver: "+221774485244",
      push_id: "741258",
      status: "received",
      last_update: "10/04/2020 14:45:12",
      ret_id: "123456"
    }
  ]
  constructor(private exportservice: ExcelserviceService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any[]>(this.data);
  }

  exporter(){
    let headers = ['id','receiver','status','last_update','ret_id'];
    let headers2 = ['ID','DESTINATAIRE','STATUS','DATE MAJ', 'RETID'];
    const table = document.getElementById("historique");
    let name = prompt("Donnez le nom du fichier");
    if(name != undefined){
      this.exportservice.exportAsExcelFileFromTable(table,headers,headers2,name);
    }
  }
}
