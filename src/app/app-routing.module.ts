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


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "entreprises",
        component: EntrepriselistComponent
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
        path: "send",
        component: SendsmsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
