import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export class OauthInterceptorService implements HttpInterceptor {
    private token = environment.token;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `OAuth ${this.token}`
            }
        });
        return next.handle(request);
    }
}
