import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { LoginService } from "./login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  loginDetail:any;

  constructor(private router:Router) { 
    this.username = "";
    this.password = "";
    this.loginDetail = {
      username:"admin",
      password:"admin"
    }
    
    // navigator.geolocation.getCurrentPosition(function(l) {
    //   console.log(l)
    // }) TO CHECK THE LOCATION
  }
  ngOnInit(): void {
  }

  register() {
    this.router.navigate(["/form"]); 
  }

  // login() {

  //   if(this.username !== "" || this.password !== "") {
  //       const user = {
  //         username:this.username,
  //         password:this.password
  //       }
        
  //       this.loginService.login(user).subscribe(login => {
  //         if(login.success) {
  //           this.router.navigate(["/dashboard"]);
  //         } else {
  //           alert("wrong username or password!")
  //         }
          
  //       })
        

  //   } else {
  //     alert("Input cant be blank!")
  //   }
   
  // }

  login() {

    if(this.username !== "" || this.password !== "") {
      if(this.username === this.loginDetail.username && this.password === this.loginDetail.password) {
        const token = "234edf"
        localStorage.setItem("access_token",token);
        this.router.navigate(["/dashboard"]); 
        // this.router.navigate(["/movielist"]); 
      } else {
        alert("Wrong username or password!");
      }
    } else {
      alert("Input cant be blank!")
    }
   
  }
}
