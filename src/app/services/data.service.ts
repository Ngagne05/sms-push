import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  logs(ideven,start,end){
    let params: HttpParams = new HttpParams();
    params.append('start',start);
    params.append('end',end);
    return this.http.get<any>(this.api_url + `logs/evenements/${ideven}/period`,{observe:"body" ,params:params});
  }

  rechargements(idclient,start,end){
    let paramse: HttpParams = new HttpParams();
    paramse.append('start',start);
    paramse.append('end',end);
    return this.http.get<any>(this.api_url + `recharges/entreprises/${idclient}/period`,{observe:'body',params:paramse})
  }

  evenements(){
    return this.http.get<any>(this.api_url + `evenements`);
  }

  historiques_resume(){

  }

  historiques_details(){

  }
}
