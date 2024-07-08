import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LoginPageComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();
  
  constructor(private router: Router) { }

  onToggleDarkMode(): void {
    console.log('toggle dark mode clicked');
    this.toggleDarkMode.emit();
  }
  onAddFaceSnap( ) {
    this.router.navigateByUrl('/create');
  }
}
