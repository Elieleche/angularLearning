import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { BehaviorSubject } from "rxjs";

    @Injectable({
        providedIn: 'root'
    })

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
		new FaceSnap(
			'Angular',
			'Découvrez note langage',
			'https://cdn.pixabay.com/photo/2015/09/17/16/40/book-944462_960_720.jpg',
			new Date(),
			254,
		),
		new FaceSnap(
			'Elie',
			'Ma première semaine de stage',
			'https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_960_720.jpg',
			new Date(),
			102,
		).withLocation('tour oxygène lyon part dieu'),
		new FaceSnap(
			'18Noam',
			'MacCain vie !',
			'https://cdn.pixabay.com/photo/2024/06/22/10/57/french-fries-8845973_1280.jpg',
			new Date(),
			154,
		).withLocation('mac cain mattougues')
    ];


	private faceSnapsSubject = new BehaviorSubject<FaceSnap[]>(this.faceSnaps);
	faceSnaps$ = this.faceSnapsSubject.asObservable();

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

	snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
		const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
		if (!foundFaceSnap) {
		  throw new Error('FaceSnap not found!');
		}
		foundFaceSnap.snap(snapType);
		this.faceSnapsSubject.next([...this.faceSnaps]);
	  }
	
	  addFaceSnap(faceSnap: FaceSnap): void {
		this.faceSnaps.push(faceSnap);
		this.faceSnapsSubject.next([...this.faceSnaps]);
	  }
	}
