import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Role } from '../models/role';
import { AuthsvService } from '../auth/authsv.service';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthsvService,
    private viewContainer: ViewContainerRef
) { }

userRoles: Role[];

@Input() 
set appUserRole(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }

    this.userRoles = roles;
}

ngOnInit() {
    let hasAccess = false;

    if (this.authService.isAuthenticated() && this.userRoles) {
        hasAccess = this.userRoles.some(r => this.authService.hasRole(r));
    }

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}
}
