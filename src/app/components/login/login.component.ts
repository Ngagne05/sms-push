import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userservice: UsersService, private router: Router,private auth: AuthService) { }

  formGroup: FormGroup = this.fb.group({
    login: ['',Validators.required],
    password: ['',Validators.required]

  });

  ngOnInit(): void {
    localStorage.clear();
  }


  login(){
    const credentials = this.formGroup.value;
    if(credentials.login && credentials.password){
      // call login services
      this.userservice.login(credentials).subscribe(response => {
        console.log('infos',response);
        
        const token = response?.jwt;
        if(token){
          localStorage.setItem('token',token);
          localStorage.setItem('user',response.id);
          localStorage.setItem('login',response.login);
          localStorage.setItem('raison_sociale', response.raison_sociale);
          let role:Role;
          switch(response.role){
            case Role.ADMIN:
              role= Role.ADMIN;
              break;
            case Role.SUPERADMIN:
              role=Role.SUPERADMIN;
              break;
            case Role.USER:
              role = Role.USER;
              break;
          }
          this.auth.login(role);
          this.router.navigate(['dashboard/send']);
        }
        
        if(response.data != undefined && response.data?.code!=200){
          alert(response.data?.message);
          return;
        }
      },(error) => {
        alert(error.message);
        console.log('error',error);
      });
    }else{
      alert('Veuillez remplir tous les champs.');
    }
  }
}
