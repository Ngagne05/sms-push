import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.scss']
})
export class AdmincreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
