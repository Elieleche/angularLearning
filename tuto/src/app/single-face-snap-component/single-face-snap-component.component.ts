import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap-component',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.css'
})
export class SingleFaceSnapComponent {
    faceSnap!: FaceSnap;
    faceSnap$!: Observable<FaceSnap>;
    snapButtonText!: string;
    buttonText!: string;

    constructor(private faceSnapsService: FaceSnapsService,
                private route: ActivatedRoute) {}
 
    ngOnInit() {
      this.buttonText = 'Oh Snap';
      const faceSnapId = this.route.snapshot.params['id'];
      console.log(`ìd : ${faceSnapId}`);
      this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
}
