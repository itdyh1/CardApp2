import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';
import { map, Observable, throwError, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // options: any | undefined;
  options = ['name1', 'name2'];
  constructor(
    private GetUsersService: GetUsersService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  title = 'CardApp2';
  getRawUsers$ = this.http.get('https://jsonplaceholder.typicode.com/users');

  getUsers() {
    this.GetUsersService.getUsers().subscribe((response) => {
      this.options = response;
      console.log(this.options);
    });
  }

  rawUsers: any | undefined;

  // this.http
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .pipe(map((response: any) => response.map((item: any) => item['name'])));

  getData() {
    let returnArray: any = this.getRawUsers$.subscribe(
      (value) => (returnArray = value)
    );
    return console.log(returnArray);
  }
}
