import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "rahul", password: 123, balance: 0, transaction:[] },
    1001: { acno: 1001, username: "amal", password: 123, balance: 0, transaction:[] },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0, transaction:[] },
    1003: { acno: 1003, username: "gwen", password: 123, balance: 0, transaction:[] },
    1004: { acno: 1004, username: "MJ", password: 123, balance: 0, transaction:[] },
  }
  
  currentUser=''
  currentAcno=''

  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false

    }
    else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0, transaction:[]}
      return true
    }
  }

  login(acno: any, psw: any) {

    

    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        this.currentUser = userDetails[acno]["username"]
        this.currentAcno = acno
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount) //converting to interger type

    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
        userDetails[acno]["transaction"].push({type:'CREDIT',amount:amnt})
        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)

    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (amnt <= userDetails[acno]["balance"]) {

          userDetails[acno]["balance"] -= amnt
          userDetails[acno]["transaction"].push({type:'DEBIT',amount:amnt})
          return userDetails[acno]["balance"]

        }
        else {
          alert("insufficient balance")
          return false
        }

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("incorrect acno")
      return false
    }

  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

}
