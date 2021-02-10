import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';
import {retry} from 'rxjs/operators';
import { ConditionalExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class Userservice {
  updateuser(editObject: any) {
    console.log(editObject)
    return this.httpClient.put('api/webapi/myresource/updateuser/',editObject);
  }
  
  postFile( fileToUpload: File) {
    // const endpoint='RESTAPI/webapi/myresource/';
    const formData: FormData = new FormData();
    formData.append('imageName', fileToUpload, fileToUpload.name);

    return this.httpClient.post('api/webapi/myresource/uploadMaterial', formData);
  }
  updatedate(user: any) {
    console.log("in service date")
    console.log(user);
    return this.httpClient.put('api/webapi/myresource/updatedate/',user);
  }
  getuser(){
    console.log("user");
    return this.httpClient.get('api/webapi/myresource/getUsers/');
  }
  consultation(consult: any,user:any ,psy:any) {
    console.log("In service consult")
     console.log(consult);
     console.log(user.userId)
     consult.user = user;
     consult.psychiatrist = psy;
     console.log(consult)
    return this.httpClient.post('api/webapi/myresource/consultform/',consult);
  }
  usermail(user:any) {
    console.log("called mail");
    console.log(user.email);
    return this.httpClient.get('api/webapi/myresource/usermail/'+user.email);
  }
  psymail(psy:any) {
    console.log("called mail");
    console.log(psy.psyEmail);
    return this.httpClient.get('api/webapi/myresource/psymail/'+psy.psyEmail);
  }
  
  count(user: any) {
    console.log("count in service");
    return this.httpClient.put('api/webapi/myresource/updateuser/',user);
   }
  public isUserLogged: any;
  public isUserEnrolled1: any;
  public isUserEnrolled2: any;
  public isUserEnrolled3: any;
  public isUserEnrolled4: any;
  constructor(private httpClient: HttpClient,private EncrDecr: EncrDecrService) {
    this.isUserLogged = false;
   }
   setuserenrolled1(user:any):void{
     if (user.strategyenrolled1 == null){
       this.isUserEnrolled1 = true;
     }
     else{
     this.isUserEnrolled1 = false;
     }
   }
   setuserenrolled2():void{
    this.isUserEnrolled2 = false;
  }
  setuserenrolled3():void{
    this.isUserEnrolled3 = false;
  }
  setuserenrolled4():void{
    this.isUserEnrolled4 = false;
  }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   register(user: any,fileToUpload:any):any{
     console.log("In service")
     console.log(user);
     var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', user.password);
     console.log(encrypted)
     user.password = encrypted.split('/').join('')
     console.log(user);
     user.ImageName = fileToUpload.name;
     const formData: FormData = new FormData();
    formData.append('imageName', fileToUpload,fileToUpload.name);
    //console.log(fileToUpload);
    //console.log(formData);
    formData.append('email',user.email);
    formData.append('firstName',user.firstName);
    formData.append('lastName',user.lastName);
    
    formData.append('mobileNumber',user.mobileNumber);
    
    formData.append('password',user.password);
    
    formData.append('conPassword',user.conPassword);
    console.log(user.conPassword);
    
    return this.httpClient.post('api/webapi/myresource/register',formData);
   }
   getUserByUserPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password);
    console.log(encrypted)
    return this.httpClient.get('api/webapi/myresource/getUserByUserPass/'+loginId+'/'+encrypted.split('/').join(''));
  }
  getUserByUserEmail(Email : any) : any{
    return this.httpClient.get('api/webapi/myresource/getUserByEmail/'+Email);
  }

  getTasks1() {
    console.log("IN Service task 1")
   
    return this.httpClient.get('api/webapi/myresource/getTaskById1/1');
  }
  getTasks2() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('api/webapi/myresource/getTaskById2/2');
  }
  getTasks3() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('api/webapi/myresource/getTaskById3/3');
  }
  getTasks4() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('api/webapi/myresource/getTaskById4/4');
  }
  getTasks() {
    console.log("IN Service task ")
   
    return this.httpClient.get('api/webapi/myresource/getTask');
  }
  
  
getBlog() {
    console.log("IN Service Blog ")
   
  return this.httpClient.get('api/webapi/myresource/getBlog');
  }

 saveBlog(blog: any,user:any) {
    blog.user=user;
    console.log(blog);
    return this.httpClient.post('api/webapi/myresource/blogdata/',blog);
  }
}