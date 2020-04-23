import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.scss']
})
export class SendsmsComponent implements OnInit {
  un=false;
  text;
  nbrdest;
  constructor() { }

  ngOnInit(): void {
  }

}
