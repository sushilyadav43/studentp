import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PopularService } from './popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  movieList:any;
  imgBaseUrl : any
  constructor(private routes:Router, private popularservice:PopularService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieList = [];

    this.popularservice.getMovieList().subscribe(movie => {
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
