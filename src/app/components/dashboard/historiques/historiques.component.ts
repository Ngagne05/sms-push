import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelserviceService } from 'src/app/shareservice/excelservice.service';
import { ClientService } from 'src/app/services/client.service';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  Role=Role;
  date1 = new Date();
  date2 = new Date();
  displayedColumns: string[] = [
    `id`,
    `to`,
    `status`,
    `lastupdate`,
    "campagne.retid"
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns1: string[] = [
    `libelle`,
    `occurence`
  ];
  dataSource1: MatTableDataSource<any>;

  displayedColumns12: string[] = [
    `libelle`,
    `occurence`
  ];
  dataSource12: MatTableDataSource<any>;

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
  ];

  data1: any[] = [

    {
      id: "1",
      libelle: "Transmission en cours",
      nombre: 2
    }, {

      id: "2",
      libelle: "Connexion  à la  passerelle impossible",
      nombre: 0
    },
    {

      id: "3",
      libelle: "SMS en attente au niveau de la passerelle",
      nombre: 2
    }, {

      id: "4",
      libelle: "SMS envoyé à l’operateur",
      nombre: 198
    }, {

      id: "6",
      libelle: "SMS reçu par le destinataire",
      nombre: 190
    }, {

      id: "11",
      libelle: "Numéro non reconnu par l’operateur",
      nombre: 0
    }, {

      id: "12",
      libelle: "Temps mort, pas d’erreur explicite",
      nombre: 8
    }, {

      id: "13",
      libelle: "Operateur non identifié",
      nombre: 0
    }, {

      id: "14",
      libelle: "Non défini : contacter le provider",
      nombre: 0
    }


  ];

  data12: any[] = [
    {

      id: "15",
      libelle: "non défini : contacter le provider",
      nombre: 0
    }, {

      id: "16",
      libelle: "Non défini : contacter le provider",
      nombre: 0
    }, {

      id: "17",
      libelle: "Erreur de syntaxe dans le SMS",
      nombre: 0
    }, {

      id: "18",
      libelle: "Destinataire sur liste noire",
      nombre: 0
    }, {

      id: "19",
      libelle: "Non défini : contacter le provider",
      nombre: 0
    }, {

      id: "20",
      libelle: "Non défini : contacter le provider",
      nombre: 0
    }, {

      id: "22",
      libelle: "Message trop long",
      nombre: 0
    }, {

      id: "23",
      libelle: "Destinataire bloqué par l’operateur",
      nombre: 0
    }


  ];
  entreprises: any;
  entreprise;
  constructor(private exportservice: ExcelserviceService, private clientservice: ClientService, private dataservice: DataService) { }

  ngOnInit(): void {
    // this.dataSource1 = new MatTableDataSource<any[]>(this.data1);
    // this.dataSource12 = new MatTableDataSource<any[]>(this.data12);

    this.dataSource = new MatTableDataSource<any[]>(this.data);
    this.clientservice.listEntreprise().subscribe(response => {
      this.entreprises = response;
    });

    this.getDeliveries(localStorage.getItem('etps'));
    this.getResume(localStorage.getItem('etps'));
  }

  exporter() {
    let headers = ['id', 'receiver', 'status', 'last_update', 'ret_id'];
    let headers2 = ['ID', 'DESTINATAIRE', 'STATUS', 'DATE MAJ', 'RETID'];
    const table = document.getElementById("historique");
    let name = prompt("Donnez le nom du fichier");
    if (name != undefined) {
      this.exportservice.exportAsExcelFileFromTable(table, headers, headers2, name);
    }
  }

  exporter1() {
    let headers = [ 'libelle', 'occurence'];
    let headers2 = ['LIBELLE', 'NOMBRE'];
    const table = document.getElementById("resume");
    let name = prompt("Donnez le nom du fichier");
    if (name != undefined) {
      this.exportservice.exportAsExcelFile(this.data1.concat(this.data12), headers, headers2, name);
    }
  }


  getDeliveries(idclient) {
    idclient = idclient == undefined ? localStorage.getItem('etps') : idclient;
    this.dataservice.getDeliveries(idclient, moment(this.date1).format('DD/MM/YYYY'), moment(this.date2).format('DD/MM/YYYY')).subscribe(response => {
      this.dataSource = new MatTableDataSource<any[]>(response);
      this.dataSource.paginator = this.paginator;
    });
  }
  getResume(idclient) {
    idclient = idclient == undefined ? localStorage.getItem('etps') : idclient;
    this.dataservice.historiques_resume(idclient, moment(this.date1).format('DD/MM/YYYY'), moment(this.date2).format('DD/MM/YYYY')).subscribe(response => {
      let data1 = [];
      let data2 = [];
      for (let i = 0; i < response.length; i++) {
        if (i < response.length / 2)
          data1.push(response[i])
        else
          data2.push(response[i]);
      }

      this.dataSource1 = new MatTableDataSource<any[]>(data1);
      this.dataSource12 = new MatTableDataSource<any[]>(data2);
    });
  }

  rechercher() {
    this.getDeliveries(this.entreprise);
    this.getResume(this.entreprise);
  }

}
