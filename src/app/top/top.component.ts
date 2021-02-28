import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopService } from "./top.service";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  movieList:any;
  imgBaseUrl : any
  constructor(private routes:Router, private topservice:TopService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieList = [];
    this.topservice.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      console.log(movie)
    })
  }

  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
