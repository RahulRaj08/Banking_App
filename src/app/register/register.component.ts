import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  constructor(private ds:DataService, private router:Router, private fb:FormBuilder){ }

  registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]}) //no need to give type as it is already group type
  

  register(){
    var uname=this.registerForm.value.uname //take values from the model array 
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw
    

    if(this.registerForm.valid){


      this.ds.register(acno,uname,psw).subscribe((result:any)=>{  //subscribe is used to resolve async function in type script
        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)    // to get error message
        this.router.navigateByUrl('')
      })
    
    // if(result){
    //   alert("Registered Successfully")
    //   this.router.navigateByUrl('')
    // }
    // else{
    //   alert('User already exist')
    //   this.router.navigateByUrl('')
    // }
    // }
    // else{
    //   alert('Invalid Details')
    // }

    

  }
  else{
    alert('invalid form')
  }



}
}
