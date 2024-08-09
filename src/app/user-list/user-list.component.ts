// src/app/user-list/user-list.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',  // Make sure this matches the element in index.html
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [HttpClient]
})
export class UserListComponent {
  users: any;

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get('http://127.0.0.1:8000/api/users/').subscribe(data => {
      this.users = data;
    });
  }
}
