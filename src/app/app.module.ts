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
    AdmincreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
