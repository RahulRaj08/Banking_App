import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const option={
  headers: new HttpHeaders
}

let headers = new HttpHeaders() // global overloading header

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ''
  currentAcno = ''
  userDetails: any

  constructor(private http:HttpClient) {  //inject http client class 

  
  }


  getToken(){
    const token=JSON.parse(localStorage.getItem('token') || '')

    let headers = new HttpHeaders() // an object to store token

    if(token){
      option.headers=headers.append('access-token',token) //append token to object
    }

    return option


    
  }
 



  register(acno: any, uname: any, psw: any) {

    const data={                               //data for body 
      acno,uname,psw
    }

    return this.http.post('http://localhost:3000/register',data)

  }

  login(acno: any, psw: any) {

    const data={
      acno,psw
    }

    return this.http.post('http://localhost:3000/login',data)

  }

  deposit(acno: any, password: any, amount: any) {

    const data={
      acno,psw:password,amount
    }

    return this.http.post('http://localhost:3000/deposit',data, this.getToken())

   
    
  }

  withdraw(acno: any, password: any, amount: any) {
    
    const data ={
      acno,psw:password,amount
    }
    return this.http.post('http://localhost:3000/withdraw',data, this.getToken())

  }

  getTransaction(acno: any) {
    
    const data ={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data, this.getToken())

  }

  deleteacc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno, this.getToken())

  }

}
