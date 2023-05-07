import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url= "apiurll" // api/auth/login??
  currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("auth service running");
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem("currentUser") || "{}"));
  }
  Login(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials).pipe(map(data=>{
      sessionStorage.setItem("user",JSON.stringify(data));
      this.currentUserSubject.next(data);
      //console.log(data);
      return data;
    }));
  }
  get AuthenticatedUser(){
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }
}
