import { Component } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profiles: Profile[] = [
    {
      name: 'Riya',
      email: 'riya@gmail.com',
      phoneNo: 9876543210,
      age: 21,
      edit: false,
    },
    {
      name: 'Priya',
      email: 'priya@gmail.com',
      phoneNo: 9876543210,
      age: 22,
      edit: false,
    },
    {
      name: 'khushboo',
      email: 'khushboo@gmail.com',
      phoneNo: 9876543210,
      age: 23,
      edit: false,
    },
    {
      name: 'shreya',
      email: 'shreya@gmail.com',
      phoneNo: 9876543210,
      age: 23,
      edit: false,
    },
  ];
}
