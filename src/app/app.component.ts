import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // options: any | undefined;
  options: any | undefined;
  rawUsers: any[] | undefined; // this will be an array of objects

  constructor(
    private GetUsersService: GetUsersService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getStreet();
  }

  title = 'CardApp2';

  // For a subscription to work, we need to set the variable inside the subscribe callback function
  getStreet() {
    this.GetUsersService.getStreet().subscribe((response) => {
      this.options = response;
      console.log(this.options);
    });
  }

  // This should/could? go in a service
  getRawUsers$ = this.http.get('https://jsonplaceholder.typicode.com/users');

  getData() {
    this.getRawUsers$.subscribe((response) => {
      // Convert the response to an array of objects
      this.rawUsers = Object.values(response);
    });
  }

  // ------------------------ CODE Example-----------------------------
  snippet = `function test(){
  console.log('Test');
}`;
}
