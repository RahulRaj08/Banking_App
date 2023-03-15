import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
  user=''
  acno:any
  dateandtime:any

  constructor(private ds:DataService, private fb:FormBuilder,private router:Router){ 
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser') || ' ')
    }
    
    this.dateandtime = new Date()
  }

  depositForm = this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  withdrawForm = this.fb.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],psw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void{ //function in prevent user getting into dashboard by using back click
    if(!localStorage.getItem('token')){ // if current account not present... asks to enter details
      alert('Please login first')
      this.router.navigateByUrl('')
    }
  }
  

  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){

      this.ds.deposit(acno,psw,amnt).subscribe((result:any)=>{
        alert(`${amnt} credited to your account and the balance is ${result.message}`)
      },
      result=>{
        alert(result.error.message)
      })

    
    }
    else{
      alert('invalid form')
    }

    

  }

  withdraw(){

    var acno1=this.withdrawForm.value.acno1
    var psw1=this.withdrawForm.value.psw1
    var amnt1=this.withdrawForm.value.amnt1

    if(this.withdrawForm.valid){

      this.ds.withdraw(acno1,psw1,amnt1).subscribe((result:any)=>{
        alert(`${amnt1} debited from your account and the balance is ${result.message}`)
      },
      result=>{
        alert(result.error.message)
      })

    }

    else{
      alert('Invalid Form');
    }

    
  
    
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.router.navigateByUrl('')
  }


  deleteConfirm(){

    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '')

  }

  oncancel(){

    this.acno=''

  }

  delete(event:any){
    this.ds.deleteacc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logout()
      
    },
    result=>{
      alert(result.error.message)
    })
    
  }

}
