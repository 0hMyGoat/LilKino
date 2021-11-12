import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';
import {MatCard, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  @Input() movie!: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private card: MatCard
    ) { }

  ngOnInit(): void {
  }

}
