import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //get users json from data created using json-server
  getUsersPromise: Promise<any>;
  addUserPromise: Promise<any>;
  userModel = new UserModel();

  //service injection
  usersService: UsersService;

  constructor(public service: UsersService) {
    this.usersService = service;
  }
  

  occupationList = ["Software Engineer", "Doctor", "Carpenter", "Business"];

  ngOnInit(): void {
  }

  signupClick(signUpFormRef){
    let userExists = false;
    let model = this.userModel;

    //Just to KNOW
    console.log(signUpFormRef.value);

    this.getUsersPromise = this.usersService.getUsers();
    
    //Check if user already exists
    this.getUsersPromise.then((existingUsers) => {
      existingUsers.forEach(function (existingUser) {
        if (existingUser.email == model.email) {
            // if user already exists
            alert("User already exists");
            userExists = true;
            return;
        }
      });

      //if user doesnt exists - create new user
      if (!userExists) {
        if (signUpFormRef.valid) {
          this.addUserPromise = this.usersService.addUser(model);

          this.addUserPromise.then((addedUser) => {
            alert("User-" + addedUser.firstName+" is added");

            //to reset the values after submit
            signUpFormRef.submitted = false;
            signUpFormRef.reset();
          })
        }
      }
    })

  }

}
