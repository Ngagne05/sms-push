import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialAppModule} from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarificationsComponent } from './components/dashboard/entreprises/tarifications/tarifications.component';
import { ReinitpwdComponent } from './components/reinitpwd/reinitpwd.component';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MyDateFormat } from './utils/my-date-format';
import { AppInterceptorInterceptor } from './app-interceptor.interceptor';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ParametresComponent } from './components/dashboard/parametres/parametres.component';
import { InternationalPhoneModule } from 'ngx-intl-phone';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    EditerprofilComponent,
    TarificationsComponent,
    ReinitpwdComponent,
    ParametresComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialAppModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['*']
    }}),
    InternationalPhoneModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'fr'
    },JwtHelperService,
    {provide: DateAdapter, useClass: MyDateFormat},
    ExcelserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
