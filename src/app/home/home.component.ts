import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: any
  movieItem: any
  movieTop: any
  imgBaseUrl: any
  
  constructor(private routes: Router, private homeservice: HomeService) {
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieList = [];
    this.movieItem = [];
    this.movieTop = [];

    this.homeservice.getMovieList().subscribe(movie => {

      for (let i = 0; i < movie.results.length; i++) {
        if (i < 4) {
          this.movieList.push(movie.results[i]);
        } else {

        }
      }
    });

    this.homeservice.getMovieItem().subscribe(movie => {
      console.log(movie)
      for (let i = 0; i < movie.results.length; i++) {
        if (i < 4) {
          this.movieItem.push(movie.results[i]);
        } else {

        }
      }
    })
    this.homeservice.getMovieTop().subscribe(movie => {
      console.log(movie)
      for (let i = 0; i < movie.results.length; i++) {
        if (i < 4) {
          this.movieTop.push(movie.results[i]);
        } else {

        }
      }
    })
  }

  ngOnInit(): void {
  }
  getImgURL(imgId: any) {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
