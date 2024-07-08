import { Component, HostListener, LOCALE_ID, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFaceSnapComponent } from './add-face-snap/add-face-snap.component';
import { interval, map, Observable, filter, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    AddFaceSnapComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isDarkMode: boolean = false;

  interval$!: Observable<string>;
  ngOnInit() {
/*    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))
    );
*/
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

  logger(text: string): void {
    console.log(`log: ${text}`);
  }

  title = 'tuto';
}
