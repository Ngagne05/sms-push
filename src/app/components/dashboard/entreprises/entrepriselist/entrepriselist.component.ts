import { Component, OnInit, ViewChild } from '@angular/core';
import { Entreprise } from 'src/app/models/entreprise';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-entrepriselist',
  templateUrl: './entrepriselist.component.html',
  styleUrls: ['./entrepriselist.component.scss']
})
export class EntrepriselistComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'raisonsociale',
    'adresse',
    'solde',
    'telephone',
    'actions'
  ];
  dataSource: MatTableDataSource<Entreprise>;

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.listEntreprise().subscribe(response =>{
      console.log(response);
      this.dataSource = new MatTableDataSource<Entreprise>(response);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
   
  }

  delete(idclient){
    if(confirm("Voulez-vous supprimer ce client?"))
    this.clientService.delete(idclient).subscribe(response => {
      alert(response.data.message);
    },
      error => {
        alert(error.message);
      }
    );
  }
}
