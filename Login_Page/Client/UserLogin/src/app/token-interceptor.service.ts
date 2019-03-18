import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  //could not import AuthService in the constructoe
  constructor(private injector: Injector) {}

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    //Making a close of the request
    let tokenizedReq = req.clone({
      setHeaders: {
        //Authorization: 'Bearer xx.yy.zz'
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}

//Sending the token to the backend.
