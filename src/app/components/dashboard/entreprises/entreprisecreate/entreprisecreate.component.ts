import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entreprisecreate',
  templateUrl: './entreprisecreate.component.html',
  styleUrls: ['./entreprisecreate.component.scss']
})
export class EntreprisecreateComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private location: Location, private clientservice: ClientService, private formBuilder: FormBuilder,
    private router: Router) { }
  formGroup: FormGroup = this.formBuilder.group({
    raison_sociale: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.required],

  })
  editpath = false;
  componentTitle = 'Ajout d\'un client';
  idclient;
  ngOnInit(): void {
    console.log(this.router.url);
    this.editpath = this.router.url == '/dashboard/entreprises/create' ? false : true;
    this.componentTitle = this.editpath ? 'Editer un client' : 'Ajout d\'un client';
    if (this.editpath) {
      this.activateRoute.paramMap.subscribe(param => {
        this.idclient = param.get("id");
        this.clientservice.getByIdClient(this.idclient).subscribe(response => {
          this.formGroup.controls["raison_sociale"].setValue(response.raisonsociale);
          this.formGroup.controls["adresse"].setValue(response.adresse);
          this.formGroup.controls["telephone"].setValue(response.telephone);


        })
      })
    }
  }

  goBack() {
    this.location.back();
  }


  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.editpath)
        this.clientservice.create(this.formGroup.value).subscribe((response) => {
          alert(response.data.message);
          if (response.data.code == 201)
            this.router.navigate(['/dashboard/entreprises']);
        }, error => {
          alert(error.message);
        })
      else {

        this.clientservice.update(this.idclient, this.formGroup.value).subscribe(response => {
          alert(response.data.message);
          if (response.data.code == 200)
            this.router.navigate(['/dashboard/entreprises/details', this.idclient]);
        }, error => {
          alert(error.message);
        });
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }


}
