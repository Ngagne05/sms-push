import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { UsersService } from 'src/app/services/users.service';

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
  idclient;
  entreprise;
  constructor(private userservice: UsersService, private activateRoute: ActivatedRoute,private clientservice: ClientService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(param => {
      this.idclient = param.get("id");
      this.clientservice.getByIdClient(this.idclient).subscribe(response =>{
        this.entreprise = response;
        this.clientservice.listUsersEntreprise(this.idclient).subscribe(response => {
          this.dataSource = new MatTableDataSource<any>(response);

        })
      },error => {
        
      });
    });
    
    


  }

  lock(iduser){
    if(confirm("Voulez vous desactiver cet utilisateur")){
      this.userservice.lock(iduser).subscribe(response => {
        alert(response.data.message);
        this.clientservice.listUsersEntreprise(this.idclient).subscribe(response => {
          this.dataSource = new MatTableDataSource<any>(response);

        })
      });
      
    }
  }


  unlock(iduser){
    if(confirm("Voulez vous activer cet utilisateur")){
      this.userservice.unlock(iduser).subscribe(response => {
        alert(response.data.message);
        this.clientservice.listUsersEntreprise(this.idclient).subscribe(response => {
          this.dataSource = new MatTableDataSource<any>(response);

        })
      });
      
    }
  }

}
