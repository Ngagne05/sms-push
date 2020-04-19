import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  entreprise = {
    nom : "BST",
    login :"guy",
    solde: "80 000",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
