import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrashNotesComponent } from './all-trash-notes.component';

describe('AllTrashNotesComponent', () => {
  let component: AllTrashNotesComponent;
  let fixture: ComponentFixture<AllTrashNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTrashNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTrashNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
