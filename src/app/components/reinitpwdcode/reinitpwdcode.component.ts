import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reinitpwdcode',
  templateUrl: './reinitpwdcode.component.html',
  styleUrls: ['./reinitpwdcode.component.scss']
})
export class ReinitpwdcodeComponent implements OnInit {

  constructor(private userservice: UsersService,private router: Router, private fb: FormBuilder) { }

  formGroup: FormGroup = this.fb.group({
    email: ['',Validators.required],
    code: ['',Validators.required],
    new_password: ['',Validators.required]
  })
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formGroup.invalid){
      alert('Veuiller remplir tous les champs');
      return;
    }
    this.userservice.resetPassword(this.formGroup.value).subscribe(response => {
      alert(response.data.message);
      if(response.data.code == 200)
        this.router.navigate(['/']);
    })
  }

}
