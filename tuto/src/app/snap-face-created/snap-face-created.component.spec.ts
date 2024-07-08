import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFaceCreatedComponent } from './snap-face-created.component';

describe('SnapFaceCreatedComponent', () => {
  let component: SnapFaceCreatedComponent;
  let fixture: ComponentFixture<SnapFaceCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapFaceCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapFaceCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
