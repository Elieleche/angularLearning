import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { Subscription } from 'rxjs';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { AddFaceSnapComponent } from '../add-face-snap/add-face-snap.component';

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
export class FaceSnapListComponent implements OnInit {
  faceSnaps: FaceSnap[] = [];
  private faceSnapsSub!: Subscription;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnapsSub = this.faceSnapService.faceSnaps$.subscribe((faceSnaps) => {
      this.faceSnaps = faceSnaps;
    });
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
