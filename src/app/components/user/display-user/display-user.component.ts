import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/models/user-model';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  getUsersPromise: Promise<any>;
  updateUsersPromise: Promise<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  users: UserModel[] = [];
  module: string;

  //service injection
  usersService: UsersService;

  constructor(private service: UsersService, private route: ActivatedRoute) {
    this.usersService = service;
  }

  ngOnInit(): void {
    let self = this;

    self.dtOptions = {
      paging : false,
      searching: false,
      ordering: false
    };

    /*Fetching the paramaters form the route */
    console.log("Param - " + self.route.snapshot.params.module);
    self.module = self.route.snapshot.params.module;

    self.getUsersPromise = self.usersService.getUsers();

    //Check all users and show only detail related to logged in user
    this.getUsersPromise.then((existingUsers) => {
      existingUsers.forEach(function (existingUser){
        //show only detail related to logged in user if call from UserLogin
        if (self.route.snapshot.params.module == "user") {
          if (existingUser.email == self.route.snapshot.params.email){
            let tempUsers = [];
            tempUsers.push(existingUser);
            self.users = tempUsers;
          }
        }else{
          //show all user details if call from AdminLogin
          self.users = existingUsers;
        }
      });
      //dtTrigger - to trigger the table rendering 
      self.dtTrigger.next();
    });

  }

  /**on click - update details to UserMock Data */
  updateUserDetails(): void{
    this.usersService.updateUsers(this.users);
    alert("User Details updated successfully!!");
  }
  
}
