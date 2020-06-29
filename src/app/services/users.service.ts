import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    //load from json-server -> 
    //"mock:server": "json-server --watch mocks/adminUsers.json",
    //"start:proxy": "ng serve --proxy-config proxy.conf.json",
    //"start:proxy:mock:server": "concurrently --kill-others \"npm run mock:server\" \"npm run start:proxy\""

    //proxy server- due to CORS
    return this.http.get('http://localhost:3000/users').toPromise().then(
      res => {
        return res;
      }
    );
  }

  addUser(userModel){
    let url = "http://localhost:3000/users";

    return this.http.post<UserModel>(url, userModel).toPromise().then( 
      user => { 
        return user;
    });
  }


  updateUsers(userModelList) {
    userModelList.forEach(element => {
      let url = "http://localhost:3000/users/" + element.id;
      return this.http.put<UserModel>(url, element).toPromise().then(
        user => {
          return user;
        });
    });
    
  }

}
