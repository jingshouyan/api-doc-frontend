import { ServerInfo, Rsp, CodeInfo } from './../model/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getServers(): Observable<ServerInfo[]> {
    const endpoint = 'api/servers';
    return this.http.get<Rsp>(endpoint).pipe(
      map(rsp => _.map(rsp.data, x => new ServerInfo(x)))
    );
  }

  getCodes(): Observable<CodeInfo[]> {
    console.log(111);
    const endpoint = 'api/codes';
    return this.http.get<Rsp>(endpoint).pipe(
      map(rsp => _.map(rsp.data, x => new CodeInfo(x)))
    );
  }

}
