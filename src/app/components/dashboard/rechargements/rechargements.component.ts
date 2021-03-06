import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
import { ClientService } from 'src/app/services/client.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-rechargements',
  templateUrl: './rechargements.component.html',
  styleUrls: ['./rechargements.component.scss']
})
export class RechargementsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  date1 = new Date();
  date2 = new Date();
  entreprise;
  displayedColumns: string[] = [
    `id`,
    `montant`,
    `datereglement`,
    `moyen`,
    'anciensolde',
    `entreprise`
  ];
  dataSource: MatTableDataSource<any>;
  data: any[] = [
    {
      id: 1,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "15/04/2020 10:05:54",
      entreprise: "BST",
      ancien_solde: "12 000"
    },
    {
      id: 2,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "14/04/2020 10:05:54",
      entreprise: "BST",
      ancien_solde: "11 000"

    },
    {
      id: 3,
      moyen: 'orange money',
      montant: "20 000",
      date_recharge: "11/04/2020 10:05:54",
      entreprise: "BST",
      ancien_solde: "6 000"

    }
  ];
  entreprises;
  constructor(private dataservice: DataService, private clientservice: ClientService) { }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any[]>(this.data);
    this.getRechargements(localStorage.getItem('etps'));
    this.clientservice.listEntreprise().subscribe(response => {
      this.entreprises = response;
    });
  }

  getRechargements(idclient){
    idclient = idclient==undefined? localStorage.getItem('etps'): idclient;
    this.dataservice.rechargements(idclient, moment(this.date1).format('DD/MM/YYYY'),moment(this.date2).format('DD/MM/YYYY')).subscribe(response => {
      this.dataSource = new MatTableDataSource<any[]>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  rechercher(){
    this.getRechargements(this.entreprise);
  }
}
