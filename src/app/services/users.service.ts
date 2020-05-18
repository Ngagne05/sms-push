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
  readonly api_list_admin = this.api_url + "utilisateurs";
  readonly api_create_departement = this.api_url + "departements/departement";
  readonly api_create_fonction = this.api_url + "fonctions/fonction";
  readonly api_all_departement = this.api_url + "departements";
  readonly api_all_fonction = this.api_url + "fonctions";

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

  getUserById(iduser){
    return this.http.get<any>(this.api_url + `utilisateurs/${iduser}`)
  }

  getUserByLogin(login){
    return this.http.get<any>(this.api_url + `utilisateurs/login/${login}`);
  }

  lock(iduser) {
    return this.http.get<any>(this.api_url + `utilisateurs/${iduser}/lock`);
  }

  unlock(iduser){
    return this.http.get<any>(this.api_url + `utilisateurs/${iduser}/unlock`)
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
  deleteFonc(idfonction) {
    return this.http.delete<any>(this.api_all_fonction+`/${idfonction}`);
  }
  getFoncs() {
    return this.http.get<any>(this.api_all_fonction);
  }
  getDeps() {
    return this.http.get<any>(this.api_all_departement);
  }
  deleteDep(iddepartement) {
    return this.http.delete<any>(this.api_all_departement + `/${iddepartement}`);
  }
}
