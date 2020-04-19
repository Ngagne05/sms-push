import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';

@Component({
  selector: 'app-entreprisedetails',
  templateUrl: './entreprisedetails.component.html',
  styleUrls: ['./entreprisedetails.component.scss']
})
export class EntreprisedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: Entreprise[] = [
    {
      id: "1",
      nom: "BST",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      code: "1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    },
    {
      id: "2",
      nom: "LONASE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      code: "1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    },
    {
      id: "3",
      nom: "BNDE",
      adresse: "SICAP FOIRE",
      cout_unitaire: "25",
      solde: "1500",
      code: "1111",
      ret_url: "https://blackstar-tech.com",
      telephone: "2217854444",
      login: "bst2019",
      password: ""
    }
  ];
  entreprise;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.data.forEach(element => {
        if (element.id == params.get("id")) {this.entreprise = element;  }
      });
    });
  }

}
