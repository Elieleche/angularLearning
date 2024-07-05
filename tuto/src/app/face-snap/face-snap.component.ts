import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
	NgStyle,
	NgClass,
	UpperCasePipe,
	LowerCasePipe,
	TitleCasePipe,
	DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
	@Input() faceSnap!: FaceSnap;

	snapButtonText!: string;
	userHasSnapped!: boolean;

	constructor(private faceSnapService: FaceSnapsService) {

	}

	ngOnInit(): void {
		this.snapButtonText = 'Oh Snap!';
		this.userHasSnapped = false;
	}

	onSnap(): void {
		if (this.userHasSnapped) {
		  this.unSnap();
		} else {
		  this.snap();
		}
	  }
	
	unSnap() {
		this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
      }
    
    snap() {
		this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
		console.log(this.faceSnap.id);
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true;
    }   
}
