import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs'


@Injectable({providedIn: 'root'})
export class CatalogService {


    constructor(private http: HttpClient) {
    }

    get(id?): Observable<any> {
        if (id) {
            return this.http.get('api/catalogs/' + id)
        } else {
            return this.http.get('api/catalogs')
        }
    }

    count(): Observable<any> {
        return this.http.get('api/catalogs/count')
    }

    create(body): Observable<any> {
        return this.http.post('api/catalogs', body)
    }

    update(body): Observable<any> {
        return this.http.put('api/catalogs/' + body._id, body)
    }

    delete(id): Observable<any> {
        return this.http.delete('api/catalogs/' + id)
    }
}
