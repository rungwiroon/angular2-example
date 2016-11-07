import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { MarkerModel, MockedMapModel } from '.'

import { webApiUrl } from '../../shared'

@Injectable()
export class RealtimeService {
    private realtimeUrl = webApiUrl + "/Realtime";
    
    private currentUser = JSON.parse(localStorage.getItem('currentUser'))
    private token = this.currentUser && this.currentUser.token;
    private headers = new Headers(
        { 'Authorization': `Bearer ${this.token}` }
    );

    constructor(private http: Http) {
    }

    public get() {
        console.log(this.realtimeUrl)
        return this.http.get(this.realtimeUrl + "/getfirst", { headers: this.headers })
            .map((response: Response) => {
                let data = response.json() && response.json().RouteList;
                if (data) {
                    console.log(data);
                    return data;
                }
                else {
                    //this.handleError;
                    return response.json();
                }
            })
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /* public get() : MapModel[] {
         let models = MockedMapModel
         return models;
     }*/
}
