import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entrepriserecharge',
  templateUrl: './entrepriserecharge.component.html',
  styleUrls: ['./entrepriserecharge.component.scss']
})
export class EntrepriserechargeComponent implements OnInit {
  date1 = new Date();
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
