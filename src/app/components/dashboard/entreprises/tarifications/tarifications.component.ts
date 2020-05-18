import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarifications',
  templateUrl: './tarifications.component.html',
  styleUrls: ['./tarifications.component.scss']
})
export class TarificationsComponent implements OnInit {

  displayedColumns: string[] = [
    'indicatif',
    'operateur',
    'coutsms',
    'action'
  ];
  data = [
    {
      indicatif: 221,
      operateur: "TOUT-SENEGAL",
      cout_unitaire: "250"
    }
  ];
  idclient;
  isedit=false;
  dataSource: MatTableDataSource<any>;
  constructor(private activatedRoute: ActivatedRoute, private location: Location, private clientservice: ClientService, private fb: FormBuilder) { }
  formGroup: FormGroup = this.fb.group({
    indicatif: ['', Validators.required],
    operateur: ['', Validators.required],
    cout_unitaire: ['', Validators.required],

  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idclient = params.get("id");
      this.clientservice.listeTarif(this.idclient).subscribe(response => {
        this.dataSource = new MatTableDataSource(response);

      }, error => {

      });
    })

  }

  goBack() {
    this.location.back();
  }

  onSubmit() {

    if (this.formGroup.valid) {
      if(!this.isedit)
      this.clientservice.createTarification(this.idclient, this.formGroup.value).subscribe(response => {
        console.log(response);
        alert(response.data.message);
        if(response.data.code == 201)
        this.formGroup.reset();
        this.clientservice.listeTarif(this.idclient).subscribe(response => {
          this.dataSource = new MatTableDataSource(response);
  
        }, error => {
  
        });
      }, error => {
        console.error(error);
      });
      else{
        this.clientservice.updateTarification(this.idclient,this.formGroup.value.cout_unitaire).subscribe(response =>{
          console.log(response);
        alert(response.data.message);
        if(response.data.code == 201)
        this.formGroup.reset();
        this.clientservice.listeTarif(this.idclient).subscribe(response => {
          this.dataSource = new MatTableDataSource(response);
  
        }, error => {
  
        });
        },error => {

        });
      }
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  supprimer(tarif) {
    if (confirm("Voulez vous vraiment supprimer cette destination")) {
      this.clientservice.supprimerTarif(tarif.id).subscribe((response: any) => {
        alert(response.data.message);
      }, error => {
        alert(error.message);
      });
    }

  }
  edit(tarif){
    this.isedit = true;
    this.formGroup.controls['indicatif'].setValue(tarif.indicatif);
    this.formGroup.controls['operateur'].setValue(tarif.operateur);
    this.formGroup.controls['cout_unitaire'].setValue(tarif.coutsms);

    this.formGroup.controls['indicatif'].disable();
    this.formGroup.controls['operateur'].disable();

  }
  annulerEdit(){
    this.isedit=false;
    this.formGroup.controls['indicatif'].enable();
    this.formGroup.controls['operateur'].enable();
    this.formGroup.reset();
  }
}
