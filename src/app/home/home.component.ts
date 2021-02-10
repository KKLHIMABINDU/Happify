import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  user: any;
  psy :any;
  closeResult: string;
  myDate = new Date();
  blogs: any;
  blog:any;
  
  
  constructor(private router: Router,public service: Userservice,private modalService: NgbModal,private datePipe: DatePipe) {
    this.blog={postId:'',postContent: ''}
   }


  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadCurrentPsy();
    this.service.getBlog().subscribe( (result: any) => {console.log(result); this.blogs = result; });
   
  }
  comment(){
    console.log(this.user);
    this.service.saveBlog(this.blog,this.user).subscribe();
    this.service.getBlog().subscribe( (result: any) => {console.log(result); this.blogs = result; });
   

  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  

  }
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }
  
  toggleFlip3() {
    this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
  }
  
  loadCurrentPsy(){
    this.psy = JSON.parse(localStorage.getItem('Psy'))
    console.log("in home ts")
    console.log(this.psy);
  
  }
  gotostrategy1():void{
    this.router.navigate(['strategy1']);

  }
  actionMethod1():void{
    this.myDate = new Date();
    this.service.isUserEnrolled1=false;
    let latestdate =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    
    this.user.strategyenrolled1=latestdate;
    this.service.updatedate(this.user).subscribe();
    localStorage.setItem('User', JSON.stringify(this.user));
    console.log("localstorage",localStorage)
    console.log(latestdate);
this.service.setuserenrolled1(this.user);
  }
  actionMethod2():void{
    this.myDate = new Date();
    this.service.isUserEnrolled2=false;
    let latestdate =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.user.strategyenrolled2=latestdate;
    
    this.service.updatedate(this.user).subscribe();
    localStorage.setItem('User', JSON.stringify(this.user));
    console.log("localstorage",localStorage)
    console.log(latestdate);
  }
  actionMethod3():void{
    this.myDate = new Date();
    this.service.isUserEnrolled3=false;
    let latestdate =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    
    this.user.strategyenrolled3=latestdate;
    this.service.updatedate(this.user).subscribe();
    localStorage.setItem('User', JSON.stringify(this.user));
    console.log("localstorage",localStorage)
    console.log(latestdate);
  }
  actionMethod4():void{
    this.myDate = new Date();
    this.service.isUserEnrolled4=false;
    let latestdate =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    
    this.user.strategyenrolled4=latestdate;
    this.service.updatedate(this.user).subscribe();
    localStorage.setItem('User', JSON.stringify(this.user));
    console.log("localstorage",localStorage)
    console.log(latestdate);
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

}
