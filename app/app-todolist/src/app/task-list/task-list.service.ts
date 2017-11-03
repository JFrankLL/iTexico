import { ITask } from '../task/task';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskListService {

  private _url = 'http://localhost:8000/tasks';

  constructor(private _http: HttpClient) { }
// GET --------------------------------------------------------------------------------------------
  getTasks(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this._url)
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  getTask(id): Observable<ITask> {
    return this._http.get<ITask>(this._url + '/' + id)
      .catch(this.handleError);
  }
// POST -------------------------------------------------------------------------------------------
  postTask(task): Observable<any> {
    return this._http.post(this._url, task)
      .catch(this.handleError);
  }
// PUT --------------------------------------------------------------------------------------------
  toggleTask(body): Observable<any> {
    return this._http.put(this._url + '/' + body._id, body)
      .catch(this.handleError);
  }
// DELETE -----------------------------------------------------------------------------------------
  deleteTask(id: string): Observable<any> {
    return this._http.delete(this._url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
