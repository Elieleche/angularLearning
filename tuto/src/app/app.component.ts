import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFaceSnapComponent } from './add-face-snap/add-face-snap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    AddFaceSnapComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode: boolean = false;

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    }
  }

  title = 'tuto';

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('btn-add-snap')) {
      event.preventDefault();
      if (document.getElementById('addFaceSnap')) {
        document.getElementById('addFaceSnap')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/facesnaps#addFaceSnap';
      }
    }
  }
}
