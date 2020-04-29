import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelserviceService } from 'src/app/shareservice/excelservice.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  date1 = new Date();
  date2 = new Date();
  displayedColumns: string[] = [
    `id`,
    `receiver`,
    `status`,
    `last_update`,
    "ret_id"
  ];
  dataSource: MatTableDataSource<any>;

  displayedColumns1: string[] = [
    `id`,
    `libelle`,
    `nombre`
  ];
  dataSource1: MatTableDataSource<any>;

  displayedColumns12: string[] = [
    `id`,
    `libelle`,
    `nombre`
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
  constructor(private exportservice: ExcelserviceService) { }

  ngOnInit(): void {
    this.dataSource1 = new MatTableDataSource<any[]>(this.data1);
    this.dataSource12 = new MatTableDataSource<any[]>(this.data12);

    this.dataSource = new MatTableDataSource<any[]>(this.data);

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
    let headers = ['id', 'libelle', 'nombre'];
    let headers2 = ['ID', 'LIBELLE', 'NOMBRE'];
    const table = document.getElementById("resume");
    let name = prompt("Donnez le nom du fichier");
    if (name != undefined) {
      this.exportservice.exportAsExcelFile(this.data1.concat(this.data12), headers, headers2, name);
    }
  }


}
