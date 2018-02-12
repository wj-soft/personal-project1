import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {


  token: any;
  name: any;


  constructor(public afAuth: AngularFireAuth, private router: Router) { 
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        this.getUser();
        this.router.navigate(['dashboard']);
      }).catch(err => {
        console.log(err)
      })
  }
  logout() {
    this.afAuth.auth.signOut()
   .then(function () {
     
     alert("로그아웃 완료" )
     
     setTimeout("location.href='/'", 1000)
    }).catch(function (error) {
      console.log(error)
    });
  }

  //로그인 유저 정보가저오기
  getUser() {
    let user = this.afAuth.auth.currentUser;

    if (user) {
      // User is signed in.
      this.name = user.displayName
      console.log("Sign-in provider: " + user.providerId);
      console.log("  Provider-specific UID: " + user.uid);
      console.log("  Name: " + user.displayName);
      console.log("  Email: " + user.email);
      console.log("  Photo URL: " + user.photoURL);
    } else {
      // No user is signed in.
    }
  }

  //유저정보 수정하기
  changeUserInfo(displayName:string, photoURL:string) {
    let user = this.afAuth.auth.currentUser;

    user.updateProfile({
      displayName: displayName,
      photoURL: photoURL
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  //회원탈퇴
  removeUser () {
    let user = this.afAuth.auth.currentUser;

    user.delete().then(function () {
      // User deleted.
    }).catch(function (error) {
      // An error happened.
    });
  }

  

}
