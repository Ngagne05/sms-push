import { Component, OnInit, ViewChild } from '@angular/core';
import { Entreprise } from 'src/app/models/entreprise';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-entrepriselist',
  templateUrl: './entrepriselist.component.html',
  styleUrls: ['./entrepriselist.component.scss']
})
export class EntrepriselistComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'raison_sociale',
    'adresse',
    'solde',
    'actions'
  ];
  dataSource: MatTableDataSource<Entreprise>;

  data: Entreprise[] = [
    {
      id : "1",
      raison_sociale: "BST",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      telephone: "2217854444",
    
    },
    {
      id : "2",
      raison_sociale: "LONASE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      telephone: "2217854444",
      
    },
    {
      id : "3",
      raison_sociale: "BNDE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      telephone: "2217854444",
     
    }
  ]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Entreprise>(this.data);
  }

}
