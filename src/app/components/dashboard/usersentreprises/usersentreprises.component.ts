import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-usersentreprises',
  templateUrl: './usersentreprises.component.html',
  styleUrls: ['./usersentreprises.component.scss']
})
export class UsersentreprisesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<Utilisateur>;
  displayedColumns: string[] = [
    'id',
    'prenom',
    'nom',
    'login',
    'telephone',
    'role',
    'actif',
    'actions'
  ];

  data: Utilisateur[] = [
    {
      id: "1",
      login: "guy",
      password: "",
      telephone: "221778555555",
      role: "admin",
      actif: "actif",
      prenom:"",
      nom: "",
      matricule:"",
      email:"",
      fonction: {
        id:"",
        libelle:""
      },
      departement:{
        id:"",
        libelle:""
      },
      entreprise:{
        id: "1",
        raison_sociale:"BST",
        adresse:"",
        cout_unitaire:"",
        solde:"",
        telephone:""
      }
    },
    {
      id: "2",
      login: "rokhaya",
      password: "",
      telephone: "221778555556",
      role: "admin",
      actif: "actif",
      prenom:"",
      nom: "",
      matricule:"",
      email:"",
      fonction: {
        id:"",
        libelle:""
      },
      departement:{
        id:"",
        libelle:""
      },
      entreprise:{
        id: "1",
        raison_sociale:"BST",
        adresse:"",
        cout_unitaire:"",
        solde:"",
        telephone:""
      }
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Utilisateur>(this.data);

  }


}
