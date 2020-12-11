import { User } from './../../utilis/types/film.type';
import { FilmServiceService } from './../../utilis/services/film-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.page.html',
  styleUrls: ['./list-films.page.scss'],
})
export class ListFilmsPage implements OnInit {
  public users: User;
  constructor(private userSV: FilmServiceService) { }

  ngOnInit() {
    this.getUers();
  }
  getUers() {
    this.userSV.getFilms().subscribe(users => {
      console.log(users); 
    },
    error => {
      console.log(error);
    })
  }
}
