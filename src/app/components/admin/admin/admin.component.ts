import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminModel } from 'src/app/models/admin-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //get users json from data created using json-server
  adminServicePromise: Promise<any>;

  router: Router;

  //create AdminModel
  adminModel = new AdminModel();

  constructor(adminService: AdminService, router: Router) { 
    this.adminServicePromise = adminService.getAdminUsers();
    this.router = router;
  }

  ngOnInit(): void {
  }

  adminLoginClick(adminFormRefVar){
    let matchFound = false;

    //Example to use Form Reference Variable
    console.log("AdminModel - Password", adminFormRefVar.value.password);

    let model = this.adminModel;
    let router = this.router;
    this.adminServicePromise.then((existingAdminUsers) => {
      existingAdminUsers.forEach(function (existingAdminUser) {
        if (existingAdminUser.email == model.email
          && existingAdminUser.password == model.password) {
            /*display the users datatable */
            router.navigate(['/display-user-component', 'admin', '']);
            matchFound = true;
            return;
        }
      });
      if (!matchFound) {
        alert("No Match");
      }
    })
    
  }

}
