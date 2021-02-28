import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DashboardService } from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // movieList:any
  constructor(private router:Router) {
    // this.movieList = [];
    // this.dashbaordService.getMovieList().subscribe(movie => {
    //   this.movieList = movie.results;
    //   console.log(movie)
    // });
   }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/login"]);
  }

}
