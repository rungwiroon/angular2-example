import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { MapModel, MockedMapModel } from '.'

import { webApiUrl } from '../../shared'

@Injectable()
export class RealtimeService {

    private realtimeUrl = "https://192.168.10.3:1313/api/Realtime";
    private headers = new Headers(
       [ {
            'content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXhpbXVteiIsImp0aSI6IjM4NDNiMjkwLWQwYWItNGJmNy1iMzVmLWJlOThmYjY3NGIyZSIsImlhdCI6MTQ3ODAwNTgwMCwibmJmIjoxNDc4MDA1Nzk5LCJleHAiOjE1NjQ0MDU3OTksImlzcyI6IkV4YW1wbGVJc3N1ZXIiLCJhdWQiOiJFeGFtcGxlQXVkaWVuY2UifQ.4gyAedI3bns9O0KNDcvZmhJdygsD6DZw9EbHy0EPAF0'
        }]
    );

    constructor(private http: Http) {
    }

    public get() {
        console.log("realtime.get run...");
        let models = this.http.get(this.realtimeUrl + "/getfirst",
            { headers: this.headers }
        )
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
        return models;
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
