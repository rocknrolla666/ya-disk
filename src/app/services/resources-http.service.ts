import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class ResourcesHttpService {
    private resourcePath = 'https://cloud-api.yandex.net:443/v1/disk/resources';

    constructor(private http: HttpClient) {
    }

    getResource(path: string, limit: string, offset: string): Observable<Object> {
        const params = new HttpParams()
            .set('path', path)
            .set('limit', limit)
            .set('offset', offset);
        return this.http.get(this.resourcePath, {params});
    }
}
