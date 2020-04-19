import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Location } from '@angular/common';

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
      entreprise_id: "1"
    },
    {
      id: "2",
      login: "rokhaya",
      password: "",
      telephone: "221778555556",
      role: "admin",
      actif: "actif",
      entreprise_id: "1"
    }
  ];
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Utilisateur>(this.data);

  }

  goBack(){
    this.location.back();
  }
}
