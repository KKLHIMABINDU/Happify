import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsyService } from '../psy.service';
import { ViewChild,ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-psylogin',
  templateUrl: './psylogin.component.html',
  styleUrls: ['./psylogin.component.css']
})

export class PsyloginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2 :any;
  psy: any;
  constructor(private router: Router,private PsyService: PsyService,private toster: ToastrService) {
    this.psy = {email: '', password: ''};
  
  }
  ngOnInit() {
    this.googleInitialize();
  }
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
        
          this.psy =profile ;
            alert('login successful');
            localStorage.setItem('Psy', JSON.stringify(this.psy));
              
              
              
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
     
      

  }
    
      loginSubmit(loginForm: any): void {
    
        this.PsyService.getPsychiatristByPsychiatristPass(loginForm.loginId , loginForm.password).subscribe((result: any) => {
          this.psy = result;
          console.log("result");
          console.log(result);
          if(this.psy == null){
            //alert('Invalid Credentials..');
            this.toster.success('Try Again','Invalid credentials',{timeOut:2000});
            this.router.navigate(['register']);
            
          }
          else {
            this.PsyService.setUserLoggedIn();
            //alert('valid Credentials..');
            this.toster.success('Succesfully','Logged In',{timeOut:2000});
            localStorage.setItem('Psy', JSON.stringify(this.psy));
            console.log("stored in local storage")
            console.log(this.psy);
            this.router.navigate(['psyhome']);
            
          }
        });
        console.log(loginForm);
      }
      gotoregistration():void{
        this.router.navigate(['register']);
  
      }
    }