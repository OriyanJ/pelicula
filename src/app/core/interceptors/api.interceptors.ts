import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    switch (req.method) {
      case 'GET':
        return next.handle(this.interceptGet(req));

      default:
        return next.handle(req);
    }
  }

  interceptGet(req: HttpRequest<any>) {
    let newParams = new HttpParams({ fromString: req.params.toString() });
    newParams = newParams.append('api_key', environment.apiKey);
    newParams = newParams.append('language', environment.apiLanguage);
    return req.clone({
      params: newParams
    });
  }
}
