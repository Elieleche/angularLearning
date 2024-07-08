import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnapsSubject = new BehaviorSubject<FaceSnap[]>([]);
  faceSnaps$ = this.faceSnapsSubject.asObservable();
  faceSnapObs$ = Observable<FaceSnap>;

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
  getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(this.apiUrl + `/${faceSnapId}`);
}

snapFaceSnapById(faceSnapId: string, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
  return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `${this.apiUrl} + ${faceSnapId}`,
          updatedFaceSnap)
      )
  );
}

  addFaceSnap(faceSnap: FaceSnap): void {
    console.log("passe");
    this.http.post<FaceSnap>(this.apiUrl, faceSnap).subscribe(() => this.fetchFaceSnaps());
  }
}