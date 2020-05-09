import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprisecreate',
  templateUrl: './entreprisecreate.component.html',
  styleUrls: ['./entreprisecreate.component.scss']
})
export class EntreprisecreateComponent implements OnInit {

  constructor(private location: Location, private clientservice: ClientService,private formBuilder: FormBuilder,
    private router: Router) { }
  formGroup:FormGroup = this.formBuilder.group({
    raison_sociale: ['',Validators.required],
    adresse: ['',Validators.required],
    telephone: ['',Validators.required],

  })
  editpath = false;
  componentTitle = 'Ajout d\'un client';

  ngOnInit(): void {
    console.log(this.router.url);
    this.editpath = this.router.url == '/dashboard/entreprises/create' ? false:true;
    this.componentTitle =  this.editpath?'Editer un client': 'Ajout d\'un client';
  }

  goBack(){
    this.location.back();
  }


  onSubmit(){
    if(this.formGroup.valid){
      this.clientservice.create(this.formGroup.value).subscribe((response)=>{ 

      },error =>{
        console.log(error);
      })
    }else{
      alert("Veuillez remplir tous les champs");
    }
  }


}
