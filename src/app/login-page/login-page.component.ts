import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  aim = "your perfect banking partner"

  data = "Enter your account number: "

  acno=''

  psw=''
 
  userDetails:any = {
    1000:{acno:1000,username:"rahul",password:123, balance:0},
    1001:{acno:1001,username:"amal",password:123,  balance:0},
    1002:{acno:1002,username:"arun",password:123,  balance:0},
    1003:{acno:1003,username:"gwen",password:123,  balance:0},
    1004:{acno:1004,username:"MJ",password:123, balance:0},
  }

  login(){

    var acno = this.acno
    var psw = this.psw
    var userDetails = this.userDetails

    if(acno in userDetails){
      if(psw == userDetails[acno]["password"]){
        alert('login success')
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('Incorrect Username')
    }

  }

  // login(a:any, b:any){
  //   this.acno = a.value
  //   this.psw = b.value
    

  //   var acno = this.acno
  //   var psw = this.psw
  //   var userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if(psw == userDetails[acno]["password"]){
  //       alert('login success')
  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('Incorrect Username')
  //   }

  // }


  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno);
    

  }

  pswChange(event:any){
    this.psw = event.target.value
    console.log(this.psw);
    
  }

}
