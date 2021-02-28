import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentp';
  constructor(private router:Router) { 
    const token = localStorage.getItem("access_token");
    if (token) {
      this.router.navigate(["/dashboard"]);
      // this.router.navigate(["/movielist"]);
    }else {
      this.router.navigate(["/login"]);
    }
    console.log(token);

  }
}
