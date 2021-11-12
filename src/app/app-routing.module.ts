import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';

const routes: Routes = [

  //{path: "", redirectTo: "movies", pathMatch: "full"},
 // {path: "sessions", component: SessionsListComponent}

  {path: "movies", component: MoviesListComponent},
  {path: "movies/:id", component: MoviesPageComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
