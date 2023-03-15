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

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder){ }

  loginForm = this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]}) //modelForm

  login(){

    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw
    
    if(this.loginForm.valid){

      this.ds.login(acno,psw).subscribe((result:any)=>{
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)

      })




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
