import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // options: any | undefined;
  options = ['same', 'fun'];
  constructor(private GetUsersService: GetUsersService) {}

  ngOnInit() {
    // this.getUsers();
  }

  title = 'CardApp2';

  // getUsers() {
  //   this.GetUsersService.getUsers().subscribe((response) => {
  //     this.options = response;
  //   });
  // }
}
