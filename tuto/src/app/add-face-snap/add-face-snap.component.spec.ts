import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaceSnapComponent } from './add-face-snap.component';

describe('AddFaceSnapComponent', () => {
  let component: AddFaceSnapComponent;
  let fixture: ComponentFixture<AddFaceSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFaceSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
