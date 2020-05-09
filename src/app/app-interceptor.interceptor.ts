import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                headers: req.headers
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Content-Type', 'application/json')
                    .set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With')
                    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
                    .set('X-Requested-With', 'XMLHttpRequest')
                    .set('Authorization', 'Bearer ' + token)
            });
            return next.handle(req);
        } else {
          console.log("eeeeeeeeeeeeeeeee")
            req = req.clone({
                headers: req.headers
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Content-Type', 'application/json')
                    .set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With')
                    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
                    .set('X-Requested-With', 'XMLHttpRequest')
            });
            console.log(req);
            return next.handle(req);
        }
  }
}
