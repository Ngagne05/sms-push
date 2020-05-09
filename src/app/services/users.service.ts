import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  readonly api_url = environment.api_url;
  readonly api_login = this.api_url + "connexion";
  readonly api_logout = this.api_url + "deconnexion";
  readonly api_list_admin = this.api_url + "utilisateur/all";
  readonly api_create_departement = this.api_url + "departement";
  readonly api_create_fonction = this.api_url + "fonction";
  readonly api_all_departement = this.api_url + "departement/all";
  readonly api_all_fonction = this.api_url + "fonction/all";

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post<any>(this.api_login,credentials);
  }

  logout(){
    return this.http.get<any>(this.api_logout);
  }

  listAdmin(){
    return this.http.get<any>(this.api_list_admin);
  }

  

  createDep(nom_departement: any) {
    return this.http.post<any>(this.api_create_departement,{nom_departement:nom_departement});
  }
  updateDep(departement: any) {
    return this.http.post<any>("",departement);
  }
  createFonc(nom_fonction: any) {
    return this.http.post<any>(this.api_create_fonction,{nom_fonction:nom_fonction});
  }
  updateFonc(fonction: any) {
    return this.http.post<any>("",fonction);
  }
  deleteFonc(fonction: any) {
    return this.http.post<any>("",fonction);
  }
  getFoncs() {
    return this.http.get<any>(this.api_all_fonction);
  }
  getDeps() {
    return this.http.get<any>(this.api_all_departement);
  }
  deleteDep(departement: any) {
    return this.http.post<any>("",departement);
  }
}
