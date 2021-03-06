import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Location } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {
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
      prenom:"Guy",
      nom: "Essala",
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
      prenom:"Rokhaya",
      nom: "Seydi",
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
  constructor(private location: Location, private userservice : UsersService,private clientservice: ClientService) { }

  ngOnInit(): void {
    this.clientservice.listUsersEntreprise(localStorage.getItem('etps')).subscribe(response => {
      this.dataSource = new MatTableDataSource<Utilisateur>(response);
      this.dataSource.paginator = this.paginator;
    });

  }

  goBack(){
    this.location.back();
  }
}
