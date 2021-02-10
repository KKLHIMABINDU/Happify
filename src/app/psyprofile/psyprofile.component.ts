import { Component, OnInit } from '@angular/core';
import { PsyService } from '../psy.service';
import { Userservice } from './../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-psyprofile',
  templateUrl: './psyprofile.component.html',
  styleUrls: ['./psyprofile.component.css']
})
export class PsyprofileComponent implements OnInit {
  psy:any;
  
  constructor(private service: PsyService,private router: Router,){ }

  ngOnInit(): void {
    
    this.service.getPsy().subscribe( (result: any) => {console.log(result); this.psy = result; });
    
  }
  
  gotoconsultation(p:any){
    this.router.navigate(['consultform']);
    console.log("In psyprofile after consult pressed")
    console.log(p)
    this.psy = p;
    localStorage.setItem('Psy', JSON.stringify(this.psy));
    
  }
}