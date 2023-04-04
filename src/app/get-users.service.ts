import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getStreet() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((responseArray: any) =>
        // Map the responseArray to an array of objects containing 'name' and 'street' properties
        responseArray.map((eachArrayObject: any) => {
          // Extract the name and street properties from each 'address' object
          const { name } = eachArrayObject;
          const { street } = eachArrayObject.address;
          // Return a new object containing the 'name' and 'street' properties with key and value
          return {
            name: { key: 'name', value: name },
            street: { key: 'street', value: street },
          };
        })
      )
    );
  }
}
