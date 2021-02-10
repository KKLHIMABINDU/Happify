import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';

@Injectable({
  providedIn: 'root'
}) 
export class PsyService {

  userconmail(email: any, consult: any) {
    console.log("called mail");
    console.log(email);
    console.log(consult)
    return this.httpClient.post('api/webapi/myresource/userconmail/'+email,consult);
  }
  psyconmail(psyEmail: any, consult:any) {
    console.log("called mail");
    console.log(psyEmail);
    console.log(consult)
    return this.httpClient.post('api/webapi/myresource/psyconmail/'+psyEmail,consult);
  }
  userconmail1(email: any, consult: any) {
    console.log("called mail");
    console.log(email);
    console.log(consult)
    return this.httpClient.post('api/webapi/myresource/userconmail1/'+email,consult);
  }
  psyconmail1(psyEmail: any, consult:any) {
    console.log("called mail");
    console.log(psyEmail);
    console.log(consult)
    return this.httpClient.post('api/webapi/myresource/psyconmail1/'+psyEmail,consult);
  }
  
  
  getuser(consult: any) {
    console.log("get user in service")
    const id = consult.user.userId;
    console.log(id)
    console.log(consult.user.userId);
    return this.httpClient.get('api/webapi/myresource/getuser/'+id)
  }
  usermailconsultstatus(user: any) {
    console.log("called mail");
    console.log(user.email);
    return this.httpClient.get('api/webapi/myresource/usermail/'+user.email);
  
  }
  psymailconsultstatus(psy: any) {
    console.log("called mail");
    console.log(psy.psyEmail);
    return this.httpClient.get('api/webapi/myresource/psymail/'+psy.psyEmail);
  }
  consultstatusyes(consult: any,psy:any) {
    console.log("in service yes");
    const conId = consult.consultationId
    const  psyId = psy.psyId
    var status = "Accepted"
    return this.httpClient.get('api/webapi/myresource/consultstatus/'+psyId+'/'+conId+'/'+status);
    

  }
  consultstatusNo(consult: any,psy:any) {
    console.log("in service no");
    const conId = consult.consultationId
    const  psyId = psy.psyId
    var status = "Declined"
    return this.httpClient.get('api/webapi/myresource/consultstatus/'+psyId+'/'+conId+'/'+status);
    
  }
  deleteConsultation(consult: any) {
    return this.httpClient.delete('api/webapi/myresource/deleteconsult/' + consult.consultationId);
   }
   updateconsult(consult: any) {
     console.log("in update consult service")
     consult.consultationStatus="Accepted";
     console.log(consult);
     consult.user.noOfConsultations = consult.user.noOfConsultations+1;
    return this.httpClient.put('api/webapi/myresource/updateconsult/', consult);
   }
   updateconsult1(consult: any) {
    console.log("in update consult service")
    consult.consultationStatus="Completed";
    console.log(consult);
    consult.user.noOfConsultations = consult.user.noOfConsultations+1;
   return this.httpClient.put('api/webapi/myresource/updateconsult/', consult);
  }
  getconsult(psy:any) {
    console.log("In psy service")
    console.log(psy);
    const psyId=psy.psyId
    console.log(psy.psyId)
    return this.httpClient.get('api/webapi/myresource/consultlist/'+psyId);
    
  }

  public isPsyLogged: any;
  constructor(private httpClient: HttpClient,private EncrDecr: EncrDecrService) {
    this.isPsyLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isPsyLogged = true;
   }
   register(psy: any,fileToUpload:any):any{
    console.log("In service")
    console.log(psy);
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', psy.psyPassword);
    console.log(encrypted)
    psy.psyPassword = encrypted.split('/').join('')
    console.log(psy);
    psy.ImageName = fileToUpload.name;
    const formData: FormData = new FormData();
   formData.append('imageName', fileToUpload,fileToUpload.name);
   //console.log(fileToUpload);
   //console.log(formData);
   formData.append('psyEmail',psy.psyEmail);
   formData.append('psyName',psy.psyName);
   formData.append('psyEdu',psy.psyEdu);
   formData.append('psyMobileNumber',psy.psyMobileNumber);
   formData.append('psyGender',psy.psyGender);
   formData.append('psyPassword',psy.psyPassword);
   
   formData.append('psyconPasword',psy.psyconPassword);
   
   
   return this.httpClient.post('api/webapi/myresource/register1',formData);
  }
   getPsychiatristByPsychiatristPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password);
    console.log(encrypted.split('/').join(''))
    console.log(encrypted)
    return this.httpClient.get('api/webapi/myresource/getPsychiatristByPsychiatristPass/'+loginId+'/'+encrypted.split('/').join(''));
  }
  getPsy() {
    console.log("IN getPsy")
    return this.httpClient.get('api/webapi/myresource/getpsy');
  }
  
  
}