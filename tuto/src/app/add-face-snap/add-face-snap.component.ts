import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';


@Component({
  selector: 'app-add-face-snap',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-face-snap.component.html',
  styleUrls: ['./add-face-snap.component.css']
})
export class AddFaceSnapComponent {
  faceSnapForm: FormGroup;

  constructor(private fb: FormBuilder, private faceSnapService: FaceSnapsService) {
    this.faceSnapForm = this.fb.group({
      createdAt: new Date(),
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      location: [''],
      id: crypto.randomUUID().substring(0, 8),
    });
  }

  onSubmit() {
    if (this.faceSnapForm.valid) {
      const newFaceSnap: FaceSnap = {
        ...this.faceSnapForm.value,
        createdDate: new Date(),
        snaps: 0
      };
      this.faceSnapService.addFaceSnap(newFaceSnap);
      this.faceSnapForm.reset();
    }
  }
}
