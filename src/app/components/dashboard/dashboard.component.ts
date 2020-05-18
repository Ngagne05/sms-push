import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  entreprise = {
    nom : "BST",
    login :"guy",
    solde: "80 000",
  };
  user;
  constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfos();
  }

  getUserInfos(){
    this.userservice.getUserByLogin(localStorage.getItem('login')).subscribe(response => {
      this.user = response;
      localStorage.setItem('etps',this.user.entreprise.id);
    });
  }

  logout(){
    this.userservice.logout().subscribe(response => {}, error => { console.log(error)});
    localStorage.clear();
    this.router.navigate(['']);
  }
  
}
