import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './films/add-film/add-film.module#AddFilmPageModule' },
  { path: 'add-film', loadChildren: './films/add-film/add-film.module#AddFilmPageModule' },
  { path: 'list-films', loadChildren: './films/list-films/list-films.module#ListFilmsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
