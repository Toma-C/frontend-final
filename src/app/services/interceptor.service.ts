import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authService.AuthenticatedUser;
    if(currentUser && currentUser.accessToken) { //importante
      req = req.clone({
        setHeaders:{
          Authorization:`Bearer ${currentUser.accessToken}`
        }
      }
      )
    }
    return next.handle(req);
  }
}
