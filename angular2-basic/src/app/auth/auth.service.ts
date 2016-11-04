import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    public token: string;
    private webApiUrl = 'http://192.168.10.3:7777/api/gettoken';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        this.token = currentUser && currentUser.token;

    }

    login(username: string, password: string): Observable<boolean> {
        let body = `username=${username}&password=${password}`;
        return this.http.post(this.webApiUrl,/* body */JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .map((response: Response) => {
                let token = response.json() && response.json().access_token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                }
                else
                    return false
            })
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}