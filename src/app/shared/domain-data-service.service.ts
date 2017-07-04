import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DomainDataServiceService {

  constructor( private http: Http ) { }

getDomainData(){

//  return this.http.get('./data.json').map((res:Response) => res.json());
  return this.http.get("app/shared/data.json").map((res:Response) => res.json());
}
}
