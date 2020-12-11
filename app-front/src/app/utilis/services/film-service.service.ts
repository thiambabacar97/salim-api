import { User } from './../types/film.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  url = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users`).pipe(map((usr: any) => {
        const users = usr.result.data as User[];
        return users;
    }))
  }
  adddUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/users`, user).pipe(map((usr: any) => {
      const user = usr.data as User;
      return user;
    }))
  }
  updateUser(user: User, id: number):  Observable<User>{
    return this.httpClient.put<User>(`${this.url}/user/${id}`, user).pipe(map((usr: any) => {
      console.log(usr);
      
      const user = usr.result.data as User;
      return user;
    }))
  }
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.url}/users/${id}`);
  }
}
