import { Component, OnInit } from '@angular/core';
import { TopService } from "../top/top.service";
import { ListService } from "../list/list.service";
import { PopularService } from "../popular/popular.service";
import { HomeService } from "../home/home.service";
import { RecommendedService } from "../recommended/recommended.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.css']
})
export class TopViewComponent implements OnInit {
  movie:any;
  constructor(
    private topService:TopService, 
    private listService:ListService, 
    private popularService:PopularService, 
    private homeService:HomeService, 
    private recommendeService:RecommendedService, 
    private route:ActivatedRoute
  ) {

    this.movie = {
      title: "",
      vote_average: "",
      release_date: "",
      id: null,
      original_language: ""
    }
    this.route.params.subscribe(params => {
      console.log(params);
      this.topService.getSingleMovie(params.id).subscribe(movie => {
        console.log(movie);
        this.movie =  movie;
      })
    })
   }

  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
