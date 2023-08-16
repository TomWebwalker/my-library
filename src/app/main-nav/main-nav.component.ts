import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @Input() isLoggedIn = false;
  @Output() login = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  loginHandler(): void {
    this.login.emit();
  }

  logoutHandler(): void {
    this.logout.emit();
  }
}
