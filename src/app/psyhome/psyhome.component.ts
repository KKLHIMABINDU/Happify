import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsyService } from '../psy.service';

@Component({
  selector: 'app-psyhome',
  templateUrl: './psyhome.component.html',
  styleUrls: ['./psyhome.component.css']
})
export class PsyhomeComponent implements OnInit {
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
        console.log(index)
        console.log(index.consultationStatus)
        index.consultationDate = new Date(index.consultationDate);
        if (index.consultationStatus !== "Accepted" ) {
          if (index.consultationStatus !== "Declined"){
            if(index.consultationStatus !== "Completed"){
          console.log("in if")
          console.log(index)
          this.myarray.push(index)
          console.log(this.myarray)
            }
        }
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
  deleteconsult(consult: any) {
     
     
    this.PsyService.deleteConsultation(consult).subscribe((result: any) => {
  const i = this.consult.findIndex((element) => {return consult.consultationId === consult.consultationId;
      });
  this.consult.splice(i , 1);
    });

    
    this.PsyService.psyconmail1(this.psy.psyEmail,consult).subscribe( (result: any) => {console.log(result); });
    this.PsyService.userconmail1(consult.user.email,consult).subscribe( (result: any) => {console.log(result); });
    
  }
  
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in psyhome ts")
    console.log(this.user);
  
  }
  updateconsult(consult:any) {
   
    console.log("updating")
    console.log(consult);
    console.log("in ts")
    this.consult.consultationStatus = "Accepted" 
    console.log(this.consult);
    this.PsyService.updateconsult(consult).subscribe((result: any) => {
      const i = this.consult.findIndex((element) => {return consult.consultationId === consult.consultationId;
          });
      this.consult.splice(i , 1);
        });
    console.log(this.consult);
    this.PsyService.psyconmail(this.psy.psyEmail,consult).subscribe( (result: any) => {console.log(result); });
    this.PsyService.userconmail(consult.user.email,consult).subscribe( (result: any) => {console.log(result); });
    
  }
  
 

}
