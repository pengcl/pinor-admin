import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs'

export class TypeInputDto {
  _id?: string;
  name: string;
  pic: string
}

export class TypeOutputDto {
  _id?: string;
  name: string;
  pic: string
}

@Injectable({providedIn: 'root'})
export class TypeService {


  constructor(private http: HttpClient) {
  }

  get(id?): Observable<any> {
    if (id) {
      return this.http.get('api/types/' + id)
    } else {
      return this.http.get('api/types')
    }
  }

  count(): Observable<any> {
    return this.http.get('api/types/count')
  }

  create(body: TypeInputDto): Observable<any> {
    return this.http.post('api/types', body)
  }

  update(body: TypeInputDto): Observable<any> {
    return this.http.put('api/types/' + body._id, body)
  }

  delete(id): Observable<any> {
    return this.http.delete('api/types/' + id)
  }
}
