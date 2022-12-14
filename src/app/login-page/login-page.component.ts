import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  aim = "your perfect banking partner"

  data = "Enter your account number: "

  
 
  userDetails:any = {
    1000:{acno:1000,username:"rahul",password:123, balance:0},
    1001:{acno:1001,username:"amal",password:123,  balance:0},
    1002:{acno:1002,username:"arun",password:123,  balance:0},
    1003:{acno:1003,username:"gwen",password:123,  balance:0},
    1004:{acno:1004,username:"MJ",password:123, balance:0},
  }
 

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder){ }

  loginForm = this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]}) //modelForm

  login(){

    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw
    
    if(this.loginForm.valid){

      const result = this.ds.login(acno,psw)


      if(result){
        alert("login successful")
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('incorrect username or password')
      }
  

    }
    else{
      alert('Invalid Form')
    }
    
    // if(acno in userDetails){
    //   if(psw == userDetails[acno]["password"]){
    //     alert('login success')
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //     alert('Incorrect password')
    //   }
    // }
    // else{
    //   alert('Incorrect Username')
    // }

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


  // acnoChange(event:any){
  //   this.acno = event.target.value
  //   console.log(this.acno);
    

  // }

  // pswChange(event:any){
  //   this.psw = event.target.value
  //   console.log(this.psw);
    
  // }

}
