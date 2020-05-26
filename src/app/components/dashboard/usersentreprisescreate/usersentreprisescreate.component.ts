import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersentreprisescreate',
  templateUrl: './usersentreprisescreate.component.html',
  styleUrls: ['./usersentreprisescreate.component.scss']
})
export class UsersentreprisescreateComponent implements OnInit {

  idclient;
  iduser;
  isedit = false;
  entreprise;
  user:any;
  fonctions;
  departements;
  constructor(private router: Router, private fb: FormBuilder, private activatedRoute:ActivatedRoute,private userservice: UsersService, private clientService:ClientService, private location: Location) { }

  formGroup: FormGroup = this.fb.group({
    prenom: ['',Validators.required],
    nom: ['',Validators.required],
    login: ['',Validators.required],
    email: ['',Validators.required],
    matricule: ['',Validators.required],
    telephone: [''],
    password: [''],
    password_confirmation: [''],
    nom_fonction: [''],
    nom_departement: ['']
  });
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idclient = params.get("id");
      this.iduser = params.get("user");
      this.isedit = this.iduser?true:false;
      this.clientService.getByIdClient(this.idclient).subscribe(response => {
        this.entreprise = response;
      });
      this.userservice.getDeps().subscribe(response => {
        this.departements = response;
      });
      this.userservice.getFoncs().subscribe(response => {
        this.fonctions = response;
      });
      if(this.isedit){
        this.userservice.getUserById(this.iduser).subscribe((response:any) => {
          this.user = response;
          this.formGroup.controls["prenom"].setValue(this.user.prenom);
          this.formGroup.controls["nom"].setValue(this.user.nom);
          this.formGroup.controls["login"].setValue(this.user.login);
          this.formGroup.controls["email"].setValue(this.user.email);
          this.formGroup.controls["matricule"].setValue(this.user.matricule);
          this.formGroup.controls["telephone"].setValue(this.user.telephone);
          this.formGroup.controls["nom_fonction"].setValue(this.user.nom_fonction);
          this.formGroup.controls["nom_departement"].setValue(this.user.nom_departement);

          this.formGroup.controls["login"].disable();
          // this.formGroup.controls["email"].disable();
          this.formGroup.controls["password"].disable();
          this.formGroup.controls["password_confirmation"].disable();


          



          
        })
      }
    })
  }

  goBack(){
    this.location.back();
  }


  onSubmit(){
    if(this.formGroup.invalid){
      alert("Veuillez renseigner les champs obligatoires.");
      return;
    }

    if(!this.isedit){
      this.clientService.createUser(this.idclient,this.formGroup.value).subscribe(response => {
        alert(response.data.message);
        if(response.data.code == 201)
          this.router.navigate([`/dashboard/entreprises/users`,this.idclient]);
      },error => {
        alert(error.message);
      })
    }else{
      //todo
    }
  }

  compareFn(o1:any,o2:any){
    return o1.name==o2;
  }
}
