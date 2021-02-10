import { Component, OnInit } from '@angular/core';
import { Userservice } from './../userservice.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-consultingform',
  templateUrl: './consultingform.component.html',
  styleUrls: ['./consultingform.component.css']
})
export class ConsultingformComponent implements OnInit {
  user:any;
  consult:any;
  psy:any;
  constructor(private service: Userservice,private toster: ToastrService) {
    
  
    this.consult = {consultationId: '', fullName: '', gender: '', dob: '',email:'', mobileNumber: '',
     problem: '',consultationDate:'',consultationTime:'',consultationStatus:'',aon:''};
     
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in consultation  user ts")
    console.log(this.user);
  
  }
  loadCurrentPsy(){
    this.psy = JSON.parse(localStorage.getItem('Psy'))
    console.log("in consultation  psy ts")
    console.log(this.psy);
  
  }
  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadCurrentPsy()

  }
  consultform(): void {
    console.log("in consult form")
    
    console.log(this.consult);
    console.log(this.psy);
    console.log(this.user);
    this.service.consultation(this.consult,this.user,this.psy).subscribe((result: any) => { console.log(result); } );
    //alert("Successfully registered")
    this.toster.success('processed','consulatation',{timeOut:2000});
    this.service.usermail(this.user).subscribe( (result: any) => {console.log(result); });
    this.service.psymail(this.psy).subscribe( (result: any) => {console.log(result); });

    
  }
  

}