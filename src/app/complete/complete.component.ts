import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsyService } from '../psy.service';


import {formatDate} from '@angular/common';

formatDate(new Date(), 'yyyy/MM/dd', 'en');
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  consult: any;
  psy:any;
  user:any;
  
  myarray = []

  constructor(private PsyService: PsyService,private router: Router) { }

  ngOnInit(): void {
    this.loadCurrentPsy()
    this.loadCurrentUser()
    this.PsyService.getconsult(this.psy).subscribe( (result: any) => {console.log(result)  ;
      for(const index of result){
        console.log("in for")
        if (index.consultationStatus === "Completed" ) {
          
          console.log("in if")
          console.log(index)
          index.consultationDate = new Date(index.consultationDate);
          this.myarray.push(index)
          console.log(this.myarray)
        }
        
      }
      this.consult = this.myarray;
      
  });
  
    
    console.log("in psy home ngonit")
    console.log(this.psy);

  }
  loadCurrentPsy(){
    this.psy = JSON.parse(localStorage.getItem('Psy'))
    console.log("in consultation  psy ts")
    console.log(this.psy);
  
  }
  
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in psyhome ts")
    console.log(this.user);
  
  }
  
  
  }