import { IUser } from '../shared/IUser';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  private _url = 'http://localhost:8000/users';

  constructor(private _http: HttpClient) { }
// GET --------------------------------------------------------------------------------------------
  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._url)
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  getUser(id): Observable<IUser> {
    return this._http.get<IUser>(this._url + '/' + id)
      .catch(this.handleError);
  }
// POST -------------------------------------------------------------------------------------------
  postUser(task): Observable<any> {
    return this._http.post(this._url, task)
      .catch(this.handleError);
  }
  logInUser(user): Observable<any> {
    return this._http.post(this._url + '/login', user)
      .catch(this.handleError);
  }
// PUT --------------------------------------------------------------------------------------------
// DELETE -----------------------------------------------------------------------------------------
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
