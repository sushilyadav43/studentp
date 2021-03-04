import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RecommendedService } from "./recommended.service";

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  movieList:any;
  imgBaseUrl : any
  constructor(private routes:Router, private recommendedservice:RecommendedService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieList = [];

    this.recommendedservice.getMovieList(675327).subscribe(movie => {
      this.movieList = movie.results;
      console.log(movie)
    });
  }

  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
