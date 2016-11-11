import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AppConfig } from '.';

@Injectable()
export class HttpClient {
    private headers: Headers = new Headers();

    constructor(private http: Http) {
        this.createAuthorizationHeader();
     }

    createAuthorizationHeader() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser && currentUser.token;

        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', `Bearer ${ token }`);
    }

    get(url: string): any {
        return this.http.get(AppConfig.webApiBaseUrl + url, { headers: this.headers });
    }

    post(url: string, data: any): any {
        return this.http.post(AppConfig.webApiBaseUrl + url, JSON.stringify(data), { headers: this.headers });
    }

    put(url: string, data: any): any {
        return  this.http.put(AppConfig.webApiBaseUrl + url, JSON.stringify(data), { headers: this.headers });
    }

    delete(url: string): any {
        return  this.http.delete(AppConfig.webApiBaseUrl + url, { headers: this.headers });
    }
}