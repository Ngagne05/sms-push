import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editerprofil',
  templateUrl: './editerprofil.component.html',
  styleUrls: ['./editerprofil.component.scss']
})
export class EditerprofilComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
