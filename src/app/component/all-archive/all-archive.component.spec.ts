import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArchiveComponent } from './all-archive.component';

describe('AllArchiveComponent', () => {
  let component: AllArchiveComponent;
  let fixture: ComponentFixture<AllArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
