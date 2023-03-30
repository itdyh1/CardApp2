import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response: any) => response.map((item: any) => item['name'])));
  }
}
