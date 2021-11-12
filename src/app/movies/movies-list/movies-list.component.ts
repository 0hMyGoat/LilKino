import { Component,OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Movie } from 'src/app/shared/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  id?: number = undefined;
  movies: Movie[] = []

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.refreshMovies();
  }

  refreshMovies(): Subscription {
    return this.movieService.getMovies().subscribe((movies: Movie[])=> {this.movies = movies;})
  }

}
