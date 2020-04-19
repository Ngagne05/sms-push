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
    'nom',
    'adresse',
    'cout_unitaire',
    'solde',
    'code',
    'ret_url',
    'actions'
  ];
  dataSource: MatTableDataSource<Entreprise>;

  data: Entreprise[] = [
    {
      id : "1",
      nom: "BST",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      code:"1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    },
    {
      id : "2",
      nom: "LONASE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      code:"1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    },
    {
      id : "3",
      nom: "BNDE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde:"1500",
      code:"1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    }
  ]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Entreprise>(this.data);
  }

}
