import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly api_url = environment.api_url;
  readonly api_entreprise_create = this.api_url + 'entreprises/entreprise';
  readonly api_entreprise_list = this.api_url + 'entreprises';
  readonly api_entreprise_recharge_credit = this.api_url + 'recharge';
  readonly api_entreprise_list_rechargements = this.api_url + 'recharge/all';
  readonly api_create_tarif = this.api_url + 'tarif';


  constructor(private http: HttpClient) { }

  create(client){
    return this.http.post<any>(this.api_entreprise_create,client);
  }
  delete(idclient){
    return this.http.post<any>(this.api_url + `entreprises/${idclient}/delete`,null)
  }
  update(idclient,client){
    return this.http.post<any>(this.api_url + `entreprises/${idclient}/edit`,client);
  }
  getByIdClient(idclient){
    return this.http.get<any>(this.api_url + `entreprises/${idclient}`);
  }
  listEntreprise(){
    return this.http.get<any>(this.api_entreprise_list);
  }

  listUsersEntreprise(idclient){
    return this.http.get<any>(this.api_url + `entreprises/${idclient}/utilisateurs`);
  }
  createUser(idclient,user){
    return this.http.post<any>(this.api_url + `entreprises/${idclient}/utilisateur`,user);
  }
  
  rechargeCompteEntreprise(identreprise,recharge) {
    return this.http.post<any>(this.api_url +`entreprises/${identreprise}/recharge`,recharge);
  }

  listeRechargementAll() {
    return this.http.get<any>(this.api_entreprise_list_rechargements);
  }

  createTarification(identreprise,tarif){
    return this.http.post<any>(this.api_url+ `entreprises/${identreprise}/tarif`, tarif);
  }
  updateTarification(identreprise,tarif){
    return this.http.post<any>(this.api_url + `tarifs/${identreprise}/edit`, {cout_unitaire:tarif});
  }

  listeTarif(identreprise){
    return this.http.get<any>(this.api_url + `entreprises/${identreprise}/tarifs`);
  }

  supprimerTarif(idtarif){
    return this.http.post(this.api_url + `tarifs/${idtarif}/delete`,null);
  }
}
