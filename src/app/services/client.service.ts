import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly api_url = environment.api_url;
  readonly api_entreprise_create = this.api_url + 'entreprise';
  readonly api_entreprise_list = this.api_url + 'entreprise/all';
  readonly api_entreprise_recharge_credit = this.api_url + 'recharge';
  readonly api_entreprise_list_rechargements = this.api_url + 'recharge/all';
  readonly api_create_tarif = this.api_url + 'tarif';


  constructor(private http: HttpClient) { }

  create(client){
    return this.http.post<any>(this.api_url + 'entreprise',client);
  }

  listEntreprise(){
    return this.http.get<any>(this.api_entreprise_list);
  }

  rechargeCompteEntreprise( recharge) {
    return this.http.post<any>(this.api_entreprise_recharge_credit,recharge);
  }

  listeRechargementAll() {
    return this.http.get<any>(this.api_entreprise_list_rechargements);
  }

  createTarification(tarif){
    return this.http.post<any>(this.api_create_tarif, tarif);
  }
}
