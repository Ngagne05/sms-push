import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-entrepriserecharge',
  templateUrl: './entrepriserecharge.component.html',
  styleUrls: ['./entrepriserecharge.component.scss']
})
export class EntrepriserechargeComponent implements OnInit {
  date1 = new Date();
  constructor(private location: Location, private fb: FormBuilder, private clientservice: ClientService) { }

  formGroup: FormGroup = this.fb.group({
    montant: ['', Validators.required],
    moyen: ['', Validators.required],
    date_reglement: ['', Validators.required],
  })
  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    let identreprise = 18;
    if(this.formGroup.valid){
      this.clientservice.rechargeCompteEntreprise(identreprise,this.formGroup.value).subscribe(response => {
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
