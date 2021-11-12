import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`)
  }
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`)
  }
}
