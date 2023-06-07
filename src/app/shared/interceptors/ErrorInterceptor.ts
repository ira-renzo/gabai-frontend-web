import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NzNotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((response: HttpErrorResponse) => {
      this.notificationService.error(response.statusText, response.message)
      return throwError(() => response)
    }));
  }

}