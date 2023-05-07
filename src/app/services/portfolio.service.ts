import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://yoprogramo-backend.onrender.com/";
  constructor(private http:HttpClient) { }
  obtener_datos():Observable<any>{
    console.log("datos obtenidos");
    //return this.http.get('./assets/datos/datos.json'); // aca deberia llamar a la api
    return this.http.get(this.url + "datos/1");
  }
}
