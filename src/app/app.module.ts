import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialAppModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { EntrepriselistComponent } from './components/dashboard/entreprises/entrepriselist/entrepriselist.component';
import { EntreprisecreateComponent } from './components/dashboard/entreprises/entreprisecreate/entreprisecreate.component';
import { EntrepriserechargeComponent } from './components/dashboard/entreprises/entrepriserecharge/entrepriserecharge.component';
import { EntreprisedetailsComponent } from './components/dashboard/entreprises/entreprisedetails/entreprisedetails.component';
import { AdminlistComponent } from './components/administrations/adminlist/adminlist.component';
import { AdmincreateComponent } from './components/administrations/admincreate/admincreate.component';
import { RechargementsComponent } from './components/dashboard/rechargements/rechargements.component';
import { HistoriquesComponent } from './components/dashboard/historiques/historiques.component';
import { LogsComponent } from './components/dashboard/logs/logs.component';
import { SendsmsComponent } from './components/sendsms/sendsms.component';
import { AdmindetailsComponent } from './components/administrations/admindetails/admindetails.component';
import { UsersentreprisesComponent } from './components/dashboard/usersentreprises/usersentreprises.component';
import { UsersentreprisescreateComponent } from './components/dashboard/usersentreprisescreate/usersentreprisescreate.component';
import { UsersentreprisesdetailsComponent } from './components/dashboard/usersentreprisesdetails/usersentreprisesdetails.component';
import { ChangermotdepasseComponent } from './components/dashboard/changermotdepasse/changermotdepasse.component';
import { EditerprofilComponent } from './components/dashboard/editerprofil/editerprofil.component';
import { ExcelserviceService } from './shareservice/excelservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EntrepriselistComponent,
    EntreprisecreateComponent,
    EntrepriserechargeComponent,
    EntreprisedetailsComponent,
    AdminlistComponent,
    AdmincreateComponent,
    RechargementsComponent,
    HistoriquesComponent,
    LogsComponent,
    SendsmsComponent,
    AdmindetailsComponent,
    UsersentreprisesComponent,
    UsersentreprisescreateComponent,
    UsersentreprisesdetailsComponent,
    ChangermotdepasseComponent,
    EditerprofilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialAppModule
  ],
  providers: [ExcelserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
