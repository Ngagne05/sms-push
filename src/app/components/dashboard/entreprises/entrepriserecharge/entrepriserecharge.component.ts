import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrepriserecharge',
  templateUrl: './entrepriserecharge.component.html',
  styleUrls: ['./entrepriserecharge.component.scss']
})
export class EntrepriserechargeComponent implements OnInit {
  date1 = new Date();
  constructor(private activatedRoute: ActivatedRoute, private location: Location, private fb: FormBuilder, private clientservice: ClientService) { }

  formGroup: FormGroup = this.fb.group({
    montant: ['', Validators.required],
    moyen: ['', Validators.required],
    date_reglement: ['', Validators.required],
  })
  idclient;
  entreprise;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idclient = params.get("id");
      this.clientservice.getByIdClient(this.idclient).subscribe(response => {
        this.entreprise = response;
      })
    })
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    if(this.formGroup.valid){
      this.formGroup.controls['date_reglement'].setValue(moment(this.formGroup.controls['date_reglement'].value).format('DD/MM/YYYY'));
      this.clientservice.rechargeCompteEntreprise(this.idclient,this.formGroup.value).subscribe(response => {
        console.log(response);
        alert(response.data.message);
        if ( response.data.code == 200)
        this.location.back();
      }, error => {
        console.error(error);
      });
    }else{
      alert('Veuillez remplir tous les champs.');
    }
  }
}
