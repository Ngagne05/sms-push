import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tarifications',
  templateUrl: './tarifications.component.html',
  styleUrls: ['./tarifications.component.scss']
})
export class TarificationsComponent implements OnInit {
  displayedColumns: string[] = [
    'indicatif',
    'operateur',
    'cout_unitaire'
  ];
  data = [
    {
      indicatif:221,
      operateur: "TOUT-SENEGAL",
      cout_unitaire: "250"
    }
  ];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

}
