import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-entreprisedetails',
  templateUrl: './entreprisedetails.component.html',
  styleUrls: ['./entreprisedetails.component.scss']
})
export class EntreprisedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private clientservice: ClientService) { }

  data: Entreprise[] = [
    {
      id: "1",
      raison_sociale: "BST",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      telephone: "2217854444",
     
    },
    {
      id: "2",
      raison_sociale: "LONASE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      telephone: "2217854444",
     
    },
    {
      id: "3",
      raison_sociale: "BNDE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      telephone: "2217854444",
      
    }
  ];
  entreprise;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientservice.getByIdClient(params.get("id")).subscribe(response =>{
        this.entreprise = response
      }, error => {
        alert(error.message);
      })
    });
  }

}
