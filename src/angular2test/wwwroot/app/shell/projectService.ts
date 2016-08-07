import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ProjectService {

    public ListaFinal: Object;

    public _http: Http;

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(public http: Http) {
        this.ListaFinal = [];
        this._http = http;
    };

    getProjects() {
        //this._http.get('https://api.spacehive.com/api/Projects')
        //    .subscribe(
        //    data => this.ListaFinal = this.extractData(data),
        //    err => console.log(err),
        //    () => console.log('Random Quote Complete' + this.ListaFinal)
        //);
        //return this.ListaFinal;
        //return this._http.get('https://api.spacehive.com/api/Projects')
        //    .toPromise()
        //    //.map(response => { return this.extractData(response) });
        //    .then(response => console.log(this.extractData(response)) ) 
        //    .catch(this.handleError);

        return this._http.get('https://api.spacehive.com/api/Projects')
            .map((res: Response) => res.json());

        
    }
}