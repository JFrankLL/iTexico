import { IProfile } from './profile';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private _http: HttpClient) {

  }

  getProducts(url): Observable<IProfile[]> {
    return this._http.get<IProfile[]>(url)
    .do(data => console.log('Data', JSON.stringify(data[0])))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
