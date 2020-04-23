import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entrepriserecharge',
  templateUrl: './entrepriserecharge.component.html',
  styleUrls: ['./entrepriserecharge.component.scss']
})
export class EntrepriserechargeComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
