import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entreprisecreate',
  templateUrl: './entreprisecreate.component.html',
  styleUrls: ['./entreprisecreate.component.scss']
})
export class EntreprisecreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
