import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Userservice } from './../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  /*imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader; */
  
  imageUrl: any;
 
  fileToUpload: File;
  reader:any;
  user: any;
  constructor(private router: Router,private service: Userservice,private toster: ToastrService) {
    this.imageUrl = '/assets/images/image-1.png';
    this.user = {userId: '', firstName: '', lastName: '', email: '', mobileNumber: '',
     password: '',conPassword:'',score:'',ImageName:'',noOfConsultations:'',strategyenrolled1:''};
  }

  ngOnInit() {
    

    }
    
  register():void {
    console.log("in register user")
    console.log(this.user);
    
    this.service.register(this.user,this.fileToUpload).subscribe((result: any) => { console.log(result); } );
    //alert("Successfully registered")
    this.toster.success('For Registering','Thank You',{timeOut:2000});
    //this.service.postFile(this.fileToUpload).subscribe (
    //  (data: any) => {
   //       console.log('done');
   //       this.imageUrl = '../../assets/images/img-1.png';
             
   //   } 
  //  );
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

  //OnSubmit(imageForm: any) {
    //console.log(imageForm);
    //this.service.postFile(imageForm, this.fileToUpload).subscribe (
      //(data: any) => {
        //  console.log('done');
          //this.imageUrl = '../../assets/images/img-1.png';
             
      //} 
    //);
  //}
 
}


