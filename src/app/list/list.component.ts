import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ListService } from "./list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movieList:any

  constructor(private routes:Router, private listservice:ListService) {
    this.movieList = [];

    this.listservice.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      console.log(movie)
    });
    // this.listservice.getMovieList().subscribe(movie => {
    //   this.movieList = movie.results;
    //   console.log(movie)
    // });

    // this.listservice.getMovieDetails(800682).subscribe(d => {
    //   console.log(d)
    // })
  }

  ngOnInit(): void {
  }

}
