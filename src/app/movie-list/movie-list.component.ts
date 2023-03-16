import { Component } from '@angular/core';


import * as MoviesTelugu from  '../../assets/movies-telugu.json';
import * as MoviesTamil from '../../assets/movies-tamil.json'; 
import * as MoviesMalayalam from '../../assets/movies-malayalam.json'; 
import * as MoviesHindi from '../../assets/movies-hindi.json'; 


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})


export class MovieListComponent {

  telugumovies: any = (MoviesTelugu as any).default;
  tamilmovies: any = (MoviesTamil as any).default;
  malayalammovies: any = (MoviesMalayalam as any).default;
  hindimovies: any = (MoviesHindi as any).default;

  constructor() {
    console.log(this.telugumovies);
  }

  public changeList(language:string ) {


  }

  
    
}
