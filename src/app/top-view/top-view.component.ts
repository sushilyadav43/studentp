// import { Component, OnInit } from '@angular/core';
// import { TopService } from "../top/top.service";
// import { ActivatedRoute } from "@angular/router";

// @Component({
//   selector: 'app-top-view',
//   templateUrl: './top-view.component.html',
//   styleUrls: ['./top-view.component.css']
// })
// export class TopViewComponent implements OnInit {
//   top:any;
//   constructor(
//     private topService:TopService, 
//     private route:ActivatedRoute
//   ) {

//     this.top = {
//       title: "",
//       vote_average: "",
//       release_date: "",
//       id: null,
//       original_language: ""
//     }
//     this.route.params.subscribe(params => {
//       console.log(params);
//       this.topService.getSingleMovie(params.id).subscribe(movie => {
//         console.log(movie);
//         this.top =  movie.data;
//       })
//     })
//    }

//   ngOnInit(): void {
//   }

// }
