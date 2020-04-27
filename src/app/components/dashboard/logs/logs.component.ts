import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  date1 = new Date();
  date2 = new Date();
  displayedColumns: string[] = [
    `id`,
    `type_event`,
    `create_time`,
    `utilisateur`,
    `entreprise`
  ];
  dataSource: MatTableDataSource<any>;
  data :any[] = [
    {
      id: 1,
      type_event: "send sms",
      create_time: "12/04/2020 11:02:25",
      utilisateur: "guy",
      entreprise: "bst", 
    },
    {
      id: 2,
      type_event: "recharge",
      create_time: "12/04/2020 14:02:25",
      utilisateur: "guy",
      entreprise: "bst", 
    },
    {
      id: 3,
      type_event: "send sms",
      create_time: "12/04/2020 16:02:25",
      utilisateur: "guy",
      entreprise: "bst", 
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any[]>(this.data);
  }

}
