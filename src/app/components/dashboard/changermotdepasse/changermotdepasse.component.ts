import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changermotdepasse',
  templateUrl: './changermotdepasse.component.html',
  styleUrls: ['./changermotdepasse.component.scss']
})
export class ChangermotdepasseComponent implements OnInit {

  constructor(private location: Location, private userservice: UsersService,private fb: FormBuilder) { }

  formGroup: FormGroup = this.fb.group({
    old_password: ['',Validators.required],
    new_password: ['',Validators.required],
    password_confirmation: ['',Validators.required]
  });
  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    if(this.formGroup.invalid){
      alert('Veuillez remplir tous les champs.');
      return;
    }
    if(this.formGroup.value.new_password != this.formGroup.value.password_confirmation){
      alert('Le nouveau mot de passe n\'est pas identique au mot de passe de confirmation.')
      return;
    }
    this.userservice.changePassword(this.formGroup.value).subscribe(response => {
      alert(response.data.message);
      if(response.data.code == 200)
        this.location.back();

    }, error => {
      alert(error.message);
    });
  }
}
