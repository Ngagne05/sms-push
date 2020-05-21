import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthsvService {

  constructor(private jwthelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwthelper.isTokenExpired(token);
  }

  private user: any;

  

  hasRole(role: Role) {
      const token = localStorage.getItem('token');
      let profil = token.split(".")[1];
      profil = window.atob(profil);
      const data = JSON.parse(profil);
      switch(data.role){
        case Role.SUPERADMIN:
          this.user = Role.SUPERADMIN;
          break;
        case Role.ADMIN:
          this.user= Role.ADMIN;
          break;
          case Role.USER:
            this.user = Role.USER;
            break;
      }      

      return this.isAuthenticated() && this.user === role;
  }

  login(role: Role) {
    this.user = { role: role };
  }

  logout() {
    this.user = null;
  }
}
