import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';

import {formatDate} from '@angular/common';

formatDate(new Date(), 'yyyy/MM/dd', 'en');
@Component({
  selector: 'app-strategy4',
  templateUrl: './strategy4.component.html',
  styleUrls: ['./strategy4.component.css'],
  providers: [DatePipe]
})
export class Strategy4Component implements OnInit {
  user:any;
  closeResult: string;
  tasks: any;
  enrolled: Date;
  curdate: Date;
  day :any;
  latestdate: any;
  
  
  constructor(private router: Router,private service: Userservice,private modalService: NgbModal,private datePipe: DatePipe) {}
    
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  actionMethod(event:any) {
    event.target.disabled=true;
    
    var curdate = new Date();
    let latestdate =this.datePipe.transform(this.curdate, 'yyyy-MM-dd');
    console.log(curdate,latestdate)
    console.log(this.user.strdate2)
    if (this.user.strdate4 == null || Math.floor((this.user.strdate4 - this.latestdate)/ 1000 / 60 / 60 / 24)>=1){
      this.user.strdate4 = curdate;
      this.user.count4 = this.user.count4+1;
    }
    console.log(this.user.count4)
    localStorage.setItem('User',JSON.stringify(this.user));
    console.log("localstorage",localStorage)
    this.service.count(this.user).subscribe((result: any) => { console.log(result); } );    
  
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.service.getTasks4().subscribe( (result: any) => {console.log(result); this.tasks = result; });
  }
  days(){
    var eventEndTime = new Date();
    var eventStartTime = new Date(this.user.strategyenrolled4);
    
    let days = Math.floor((eventEndTime.valueOf() - eventStartTime.valueOf() )/ 1000 / 60 / 60 / 24);

    this.day = days+1;
    console.log(this.day)
  }
}
