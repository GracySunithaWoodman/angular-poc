import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminUsers() {
    //load from json-server -> 
    //"mock:server": "json-server --watch mocks/adminUsers.json",
    //"start:proxy": "ng serve --proxy-config proxy.conf.json",
    //"start:proxy:mock:server": "concurrently --kill-others \"npm run mock:server\" \"npm run start:proxy\""

    //proxy server- due to CORS
    return this.http.get('http://localhost:3000/adminUsers').toPromise().then(
      res => { 
        return res;
      }
    );
  }
}
