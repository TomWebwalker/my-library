import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";

// Agenda:
// 1. Routing
// 2. Resolvers
// 3. Guards
// 4. Interceptors - services session and HTTP calls

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-library';
  isLoggedIn = false;
  private router = inject(Router);

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
  }

  loginHandler(): void {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;
  }

  logoutHandler(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate([''])
  }
}
