import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  logs(ideven,idclient,start,end){
    
    return this.http.post<any>(this.api_url + `logs/evenements/${ideven}/entreprises/${idclient}/period`,{start,end});
  }

  rechargements(idclient,start,end){
    
    return this.http.post<any>(this.api_url + `recharges/entreprises/${idclient}/period`,{start,end})
  }

  getDeliveries(idclient,start,end){
    return this.http.post<any>(this.api_url + `deliverys/entreprises/${idclient}/period`,{start,end})
  }

  evenements(){
    return this.http.get<any>(this.api_url + `evenements`);
  }

  historiques_resume(idclient,start,end){
    return this.http.post<any>(this.api_url +`deliverys/entreprises/${idclient}/period/resume`,{start,end})
  }

  
}
