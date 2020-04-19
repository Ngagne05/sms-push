import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  displayedColumns: string[] = [
    `id`,
    `receiver`,
    `push_id`,
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
      last_update: "10/04/2020 ",
      ret_id: "123456"
    },
    {
      id: 2,
      receiver: "+221774412332",
      push_id: "741258",
      status: "received",
      last_update: "10/04/2020 ",
      ret_id: "123456"
    },
    {
      id: 3,
      receiver: "+221774485244",
      push_id: "741258",
      status: "received",
      last_update: "10/04/2020 ",
      ret_id: "123456"
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any[]>(this.data);
  }

}
