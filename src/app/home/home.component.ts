import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList:any
  imgBaseUrl : any
  movieItem:any
  constructor(private routes:Router, private homeservice:HomeService) {
    this.movieList = [];
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieItem = [];

    this.homeservice.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      this.movieItem = movie.results;
      console.log(movie)
    });
   }
  
  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
