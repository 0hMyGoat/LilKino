import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Movie } from 'src/app/shared/models/movie';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  id?: number = undefined;
  movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
