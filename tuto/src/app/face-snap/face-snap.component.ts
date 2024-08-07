import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    faceSnap$!: Observable<FaceSnap>;
	userHasSnapped!: boolean;

	constructor(private faceSnapService: FaceSnapsService, private router: Router) {

	}

	ngOnInit(): void {
		this.snapButtonText = 'Oh Snap!';
		this.userHasSnapped = false;
	}

	onSnap(faceSnapId: string) {
		if (this.snapButtonText === 'Oh Snap!') {
			this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
				tap(() => this.snapButtonText = 'Oops, unSnap!')
			);
		} else {
			this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
				tap(() => this.snapButtonText = 'Oh Snap!')
			);
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
	onViewFaceSnap() {
		this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
	}

	deleteById(id: string) {7
		console.log(id);
		this.faceSnapService.deleteFaceSnapById(id);
	}
 }
