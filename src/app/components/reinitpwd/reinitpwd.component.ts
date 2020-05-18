import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reinitpwd',
  templateUrl: './reinitpwd.component.html',
  styleUrls: ['./reinitpwd.component.scss']
})
export class ReinitpwdComponent implements OnInit {
  email;
  constructor(private userservice: UsersService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userservice.forgetPassword(this.email).subscribe(response => {
      alert(response.data.message);
      if(response.data.code == 200)
        this.router.navigate(['/code']);
    })
  }
}
