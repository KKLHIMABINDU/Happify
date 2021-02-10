import { Component, OnInit } from '@angular/core';
import { PsyService } from '../psy.service';
import { ToastrService } from 'ngx-toastr';
import { Desig } from '../models/desig.model';
import { Gender } from '../models/gender.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-psyregister',
  templateUrl: './psyregister.component.html',
  styleUrls: ['./psyregister.component.css']
})
export class PsyregisterComponent implements OnInit {
  desig: Desig[] = [
    { id: 1, name: 'MBBS' },
    { id: 2, name: 'MD' },
    { id: 3, name: 'Ph D' },
    { id: 4, name: 'MS' }
  ];
  gender: Gender[]=[
    { id: 1, name: 'FEMALE' },
    { id: 2, name: 'MALE' }
  ]

  psy: any;
  imageUrl: any;
 
  fileToUpload: File;
  reader:any;

  constructor(private router: Router,private service: PsyService,private toster: ToastrService) {
    this.imageUrl = '/assets/images/image-1.png';

    this.psy = {psyId: '', psyName: '', psyEmail: '', psyMobileNumber:'',psyEdu: '',psyPassword:'' ,psyconPassword:'',consultationsGiven:''};
  }

  ngOnInit() {
    }

  register(): void {
    console.log("in register psy")
    console.log(this.psy);
    this.service.register(this.psy,this.fileToUpload).subscribe((result: any) => { console.log(result); } );
    //alert(" psy Successfully registered")
    this.toster.success('For Registering','Thank You',{timeOut:2000});
    this.router.navigate(['login']);
    
  }
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
}