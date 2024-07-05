import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  onToggleDarkMode(): void {
    console.log('toggle dark mode clicked');
    this.toggleDarkMode.emit();
  }
}
