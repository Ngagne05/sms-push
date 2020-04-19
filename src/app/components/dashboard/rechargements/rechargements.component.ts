import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rechargements',
  templateUrl: './rechargements.component.html',
  styleUrls: ['./rechargements.component.scss']
})
export class RechargementsComponent implements OnInit {
  displayedColumns: string[] = [
    `id`,
    `moyen`,
    `montant`,
    `date_recharge`,
    `entreprise`
  ];
  dataSource: MatTableDataSource<any>;
  data: any[] = [
    {
      id: 1,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "15/04/2020 10:05:54",
      entreprise: "BST"
    },
    {
      id: 2,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "14/04/2020 10:05:54",
      entreprise: "BST"
    },
    {
      id: 3,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "11/04/2020 10:05:54",
      entreprise: "BST"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any[]>(this.data);

  }

}
