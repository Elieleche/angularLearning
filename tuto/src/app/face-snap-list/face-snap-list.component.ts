import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { interval, Subscription } from 'rxjs';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { AddFaceSnapComponent } from '../add-face-snap/add-face-snap.component';
import { tap, take } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    AddFaceSnapComponent,
    FaceSnapComponent,
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps: FaceSnap[] = [];
  private faceSnapsSub!: Subscription;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnapsSub = this.faceSnapService.faceSnaps$.subscribe((faceSnaps) => {
      this.faceSnaps = faceSnaps;
    });
    interval(1000).pipe(
      take(3),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.faceSnapsSub) {
      this.faceSnapsSub.unsubscribe();
    }
  }

  trackByTitle(index: number, faceSnap: FaceSnap): string {
    return faceSnap.title;
  }
}
