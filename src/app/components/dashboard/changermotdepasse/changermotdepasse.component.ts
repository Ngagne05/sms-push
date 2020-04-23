import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-changermotdepasse',
  templateUrl: './changermotdepasse.component.html',
  styleUrls: ['./changermotdepasse.component.scss']
})
export class ChangermotdepasseComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
