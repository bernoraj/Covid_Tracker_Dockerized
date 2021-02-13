import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  getStats(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    // let body={Country:data};
    return this.http.get(API_URL+'/api/v1/covid_all', options )
    .pipe(map((res: Response) => res.json()));
  }

  getTNStats(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.get(API_URL+'/api/v1/covid_TN', options )
    .pipe(map((res: Response) => res.json()));
  }

  getTNDistrict(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.get(API_URL+'/api/v1/district', options )
    .pipe(map((res: Response) => res.json()));
  }

  getDashboard(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.get(API_URL+'/api/v1/dash', options )
    .pipe(map((res: Response) => res.json()));
  }

  getpatientdetails(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.get(API_URL+'/api/v1/patient', options )
    .pipe(map((res: Response) => res.json()));
  }

  constructor(private http: Http) { }
}
