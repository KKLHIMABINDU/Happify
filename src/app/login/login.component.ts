import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Userservice } from './../userservice.service';
import { ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  auth2 :any;
  user: any;
  constructor(private router: Router,private Userservice: Userservice,private toster: ToastrService) {
    this.user = {email: '', password: ''};
  
  }
  ngOnInit() {
    
    this.googleInitialize();

  }
  // userLogin(): void {
  //   console.log('Inside user Login method...');
  //   console.log(this.user);
  // }
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '222307378819-nd4mgkmn5aj5p51gjir1ukgptfucjtst.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        
          this.user =profile ;
            alert('login successful');
            this.toster.success('Succesfully','Logged In',{timeOut:2000});
            localStorage.setItem('User', JSON.stringify(this.user));
              
              
              
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
     
      

  }

C
    
    
      loginSubmit(loginForm: any): void {
    
        this.Userservice.getUserByUserPass(loginForm.loginId , loginForm.password).subscribe((result: any) => {
          this.user = result;
          if(this.user == null){
            this.toster.success('Try Again','Invalid credentials',{timeOut:2000});
            this.router.navigate(['register']);
          }
          else{
            this.Userservice.setUserLoggedIn();
            this.toster.success('Succesfully','Logged In',{timeOut:2000});
            localStorage.setItem('User', JSON.stringify(this.user));
            console.log(this.user)
            this.router.navigate(['home']);
          }
        });
        console.log(loginForm);
      }
    gotoregistration():void{
      this.router.navigate(['register']);

    }
    }
    
    

