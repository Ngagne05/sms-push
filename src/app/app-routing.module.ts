import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntrepriselistComponent } from './components/dashboard/entreprises/entrepriselist/entrepriselist.component';
import { EntreprisecreateComponent } from './components/dashboard/entreprises/entreprisecreate/entreprisecreate.component';
import { EntreprisedetailsComponent } from './components/dashboard/entreprises/entreprisedetails/entreprisedetails.component';
import { AdminlistComponent } from './components/administrations/adminlist/adminlist.component';
import { AdmincreateComponent } from './components/administrations/admincreate/admincreate.component';
import { RechargementsComponent } from './components/dashboard/rechargements/rechargements.component';
import { HistoriquesComponent } from './components/dashboard/historiques/historiques.component';
import { LogsComponent } from './components/dashboard/logs/logs.component';
import { SendsmsComponent } from './components/sendsms/sendsms.component';
import { AdmindetailsComponent } from './components/administrations/admindetails/admindetails.component';
import { UsersentreprisescreateComponent } from './components/dashboard/usersentreprisescreate/usersentreprisescreate.component';
import { UsersentreprisesComponent } from './components/dashboard/usersentreprises/usersentreprises.component';
import { UsersentreprisesdetailsComponent } from './components/dashboard/usersentreprisesdetails/usersentreprisesdetails.component';
import { ChangermotdepasseComponent } from './components/dashboard/changermotdepasse/changermotdepasse.component';
import { EditerprofilComponent } from './components/dashboard/editerprofil/editerprofil.component';
import { EntrepriserechargeComponent } from './components/dashboard/entreprises/entrepriserecharge/entrepriserecharge.component';
import { TarificationsComponent } from './components/dashboard/entreprises/tarifications/tarifications.component';
import { ReinitpwdComponent } from './components/reinitpwd/reinitpwd.component';
import { AuthGuard } from './auth/auth.guard';
import { ParametresComponent } from './components/dashboard/parametres/parametres.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "reinitpwd",
    component: ReinitpwdComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "entreprises",
        component: EntrepriselistComponent
      },
      {
        path: "entreprises/destinations/:id",
        component: TarificationsComponent
      },
      {
        path: "entreprises/recharger/:id",
        component: EntrepriserechargeComponent
      },
      {
        path: "entreprises/create",
        component: EntreprisecreateComponent
      },{
        path: "entreprises/edit/:id",
        component: EntreprisecreateComponent
      },
      {
        path: "entreprises/details/:id",
        component: EntreprisedetailsComponent
      },
      {
        path: "entreprises/users/:id/create",
        component: UsersentreprisescreateComponent
      },
      {
        path: "entreprises/users/:id/edit/:user",
        component: UsersentreprisescreateComponent
      },
      {
        path: "entreprises/users/:id",
        component: UsersentreprisesComponent
      },
      {
        path: "entreprises/users/:id/details",
        component: UsersentreprisesdetailsComponent
      },{
        path: "utilisateurs",
        component: AdminlistComponent
      },{
        path: "utilisateurs/create",
        component: AdmincreateComponent
      },{
        path: "utilisateurs/edit/:id",
        component: AdmincreateComponent
      },{
        path: "utilisateurs/details",
        component: AdmindetailsComponent
      },
      {
        path: "rechargements",
        component: RechargementsComponent
      },
      {
        path: "historiques",
        component: HistoriquesComponent
      },
      {
        path: "logs",
        component: LogsComponent
      },
      {
        path: "parametres",
        component: ParametresComponent
      },
      {
        path: "send",
        component: SendsmsComponent
      },{
        path:"changepwd",
        component:ChangermotdepasseComponent
      },{
        path:"profil",
        component:EditerprofilComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
