import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from '../userservice.service';

declare var jQuery: any;


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: any;
  users:any;
  editObject: any;
  constructor(private router: Router,private service:Userservice) { 
  this.editObject = { firstName: '', lastName: '', email: '' , mobileNumber: '',};
  }
  ngOnInit(): void {
    this.loadCurrentUser();
    //this.service.getuser().subscribe( (result: any) => {console.log(result), this.users = result});
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in user profile ts")
    console.log(this.user);
  
  }
  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }
  updateuser() {
    this.service.updateuser(this.editObject).subscribe();
    console.log(this.editObject);
    localStorage.setItem('User', JSON.stringify(this.editObject));
  }

}


