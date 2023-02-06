import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire:AngularFireAuth,private router:Router) { }




  googlesignin(){
    return this.fire.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate([('home')]);
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
    },err =>{
      alert(err.message);
    })
  }
}
