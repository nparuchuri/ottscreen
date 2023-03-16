import { Component, Input, NgModule } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})



export class TopBarComponent {

  // @Input() telugu : telugumovies;
  // @Input() tamilmovies: any = (MoviesTamil as any).default;
  // @Input() malayalammovies: any = (MoviesMalayalam as any).default;
  // @Input() hindimovies: any = (MoviesHindi as any).default;

   showTelugu() {
      console.log("telugu clicked");
  }

  showTamil() {
    console.log("Tamil clicked");
  }

  showMalayalam() {
    console.log("Malayalam clicked");
  }

  showHindi() {
    console.log("Hindi clicked");
  }

}

