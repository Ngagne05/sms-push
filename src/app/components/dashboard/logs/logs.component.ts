import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
import { ClientService } from 'src/app/services/client.service';
import { MatPaginator } from '@angular/material/paginator';
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
  entreprises: any;
  entreprise; 
  evenements;
  evenement;
  constructor(private datasevice: DataService,private clientservice: ClientService) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    
    // this.dataSource = new MatTableDataSource<any[]>(this.data);
    //0 = tous events
    this.getLogs(0,localStorage.getItem('etps'));
    this.getEvenements();
    this.clientservice.listEntreprise().subscribe(response => {
      this.entreprises = response;
    });
    this.getEvenements();
  }

  getLogs(idevent,idclient){
    this.datasevice.logs(idevent,idclient, moment(this.date1).format('DD/MM/YYYY'),moment(this.date2).format('DD/MM/YYYY')).subscribe(response => {
      this.dataSource = new MatTableDataSource<any[]>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  getEvenements(){
    this.datasevice.evenements().subscribe(response => {
      this.evenements = response;
    })
  }

  rechercher(){
    this.getLogs(this.evenement,this.entreprise);
  }
}
