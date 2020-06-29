import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  usersService: UsersService;
  getUsersPromise: Promise<any>;
  router: Router;
  userModel = new UserModel();
 
  constructor(service: UsersService, router: Router) {
    this.usersService = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  userSignInClick(userSignInFormRef){
    let matchFound = false;
    let model = this.userModel;
    let router = this.router;

    if (userSignInFormRef.valid){
      this.getUsersPromise = this.usersService.getUsers();

      //Check if user already exists
      this.getUsersPromise.then((existingUsers) => {
        existingUsers.forEach(function (existingUser) {
          if (existingUser.email == model.email
            && existingUser.password == model.password) {

            /*display the users datatable */
            router.navigate(['/display-user-component', 'user', model.email]);

            matchFound = true;
            return;
          }
        });
        if (!matchFound) {
          alert("No Match");
        }
      });
    }


  }

}
