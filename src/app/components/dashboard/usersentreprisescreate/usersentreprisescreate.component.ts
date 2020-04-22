import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usersentreprisescreate',
  templateUrl: './usersentreprisescreate.component.html',
  styleUrls: ['./usersentreprisescreate.component.scss']
})
export class UsersentreprisescreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
