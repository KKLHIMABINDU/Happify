import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';

import {formatDate} from '@angular/common';
import { variable } from '@angular/compiler/src/output/output_ast';


formatDate(new Date(), 'yyyy/MM/dd', 'en');

@Component({
  selector: 'app-strategy2',
  templateUrl: './strategy2.component.html',
  styleUrls: ['./strategy2.component.css'],
  providers: [DatePipe]
})
export class Strategy2Component implements OnInit {
  [x: string]: any;
  user: any;
  dayclicked:any;
  closeResult: string;
  tasks: any;
  enrolled: Date;
  curdate: Date;
  day :any;
  vari:any;
  
    
  constructor(private router: Router,private service: Userservice,private modalService: NgbModal,private datePipe: DatePipe) 
  {
  
  }
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
    if (this.user.strdate2 == null || Math.floor((this.user.strdate2 - this.latestdate)/ 1000 / 60 / 60 / 24)>=1){
      this.user.strdate2 = curdate;
      this.user.count2 = this.user.count2+1;
    }
    console.log(this.user.count2)
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
    this.service.getTasks2().subscribe( (result: any) => {console.log(result); this.tasks = result; });
  }
days(){
  var eventEndTime = new Date();
  var eventStartTime = new Date(this.user.strategyenrolled2);
  
  let days = Math.floor((eventEndTime.valueOf() - eventStartTime.valueOf() )/ 1000 / 60 / 60 / 24);
  console.log("days,",days+1)
  this.day = days+1;
  console.log(this.day)
}

}
