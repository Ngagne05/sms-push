import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarifications',
  templateUrl: './tarifications.component.html',
  styleUrls: ['./tarifications.component.scss']
})
export class TarificationsComponent implements OnInit {

  displayedColumns: string[] = [
    'indicatif',
    'operateur',
    'cout_unitaire'
  ];
  data = [
    {
      indicatif:221,
      operateur: "TOUT-SENEGAL",
      cout_unitaire: "250"
    }
  ];
  dataSource: MatTableDataSource<any>;
  constructor(private location : Location, private clientservice: ClientService, private fb:FormBuilder) { }
  formGroup: FormGroup = this.fb.group({
    indicatif: ['', Validators.required],
    operateur: ['', Validators.required],
    cout_unitaire: ['', Validators.required],
    raison_sociale: ['', Validators.required],

  })
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    this.formGroup.controls['raison_sociale'].setValue("BST");

    if(this.formGroup.valid){
      this.clientservice.createTarification(this.formGroup.value).subscribe(response => {
        console.log(response);
        alert(response.data.message);
        
      }, error => {
        console.error(error);
      });
    }else{
      alert('Veuillez remplir tous les champs.');
    }
  }
}
