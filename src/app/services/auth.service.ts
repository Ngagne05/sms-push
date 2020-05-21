import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  isAuthorized() {
      return !!this.user;
  }

  hasRole(role: Role) {
      return this.isAuthorized() && this.user.Role === role;
  }

  login(role: Role) {
    this.user = { role: role };
  }

  logout() {
    this.user = null;
  }
}
