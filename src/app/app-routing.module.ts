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
      },{
        path: "utilisateurs",
        component: AdminlistComponent
      },{
        path: "utilisateurs/create",
        component: AdmincreateComponent
      },{
        path: "utilisateurs/edit/:id",
        component: AdmincreateComponent
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
