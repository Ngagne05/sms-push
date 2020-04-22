import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-usersentreprisesdetails',
  templateUrl: './usersentreprisesdetails.component.html',
  styleUrls: ['./usersentreprisesdetails.component.scss']
})
export class UsersentreprisesdetailsComponent implements OnInit {

  user:Utilisateur = {
    id: "1",
    login: "guy",
    password: "",
    telephone: "221778555555",
    role: "admin",
    actif: "actif",
    prenom:"Guy",
    nom: "Essala",
    matricule:"123456",
    email:"guy@bst.com",
    fonction: {
      id:"1",
      libelle:"Ing. Informatique"
    },
    departement:{
      id:"1",
      libelle:"Informatique"
    },
    entreprise:{
      id: "1",
      raison_sociale:"BST",
      adresse:"",
      cout_unitaire:"",
      solde:"",
      telephone:""
    }
  };
  constructor() { }

  ngOnInit(): void {
  }


}
