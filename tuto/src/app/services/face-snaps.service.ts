import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnapsSubject = new BehaviorSubject<FaceSnap[]>([]);
  faceSnaps$ = this.faceSnapsSubject.asObservable();

  private apiUrl = 'http://localhost:3000/faceSnaps';

  constructor(private http: HttpClient) {
    this.fetchFaceSnaps();
  }

  private fetchFaceSnaps(): void {
    this.http.get<FaceSnap[]>(this.apiUrl).subscribe(faceSnaps => {
      this.faceSnapsSubject.next(faceSnaps);
    });
  }

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.faceSnaps$;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    this.http.get<FaceSnap>(`${this.apiUrl}/${faceSnapId}`).pipe(
      tap(faceSnap => {
        faceSnap.snap(snapType);
        this.http.put(`${this.apiUrl}/${faceSnapId}`, faceSnap).subscribe(() => this.fetchFaceSnaps());
      })
    ).subscribe();
  }

  addFaceSnap(faceSnap: FaceSnap): void {
    this.http.post<FaceSnap>(this.apiUrl, faceSnap).subscribe(() => this.fetchFaceSnaps());
  }
}