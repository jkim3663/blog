import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpostComponent } from './delpost.component';

describe('DelpostComponent', () => {
  let component: DelpostComponent;
  let fixture: ComponentFixture<DelpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelpostComponent]
    });
    fixture = TestBed.createComponent(DelpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
