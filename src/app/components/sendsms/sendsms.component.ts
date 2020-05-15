import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.scss']
})
export class SendsmsComponent implements OnInit {
  un=false;
  text;
  nbrdest;
  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup = this.fb.group({
    sender: ['',Validators.required],
    text: ['',Validators.required],
    returl: ['http://196.207.202.189:9090',Validators.required],
    destinataire: this.fb.array([
      {
        indicatif: [""],
        numero:['']
      }
    ]),
  });
  ngOnInit(): void {
  }

}
