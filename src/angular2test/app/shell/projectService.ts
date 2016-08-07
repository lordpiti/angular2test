import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ProjectService {

    constructor(public http: Http) {

    };

    getProjects() {

        return this.http.get('https://api.spacehive.com/api/Projects')
            .map((res: Response) => res.json());     
    }
}