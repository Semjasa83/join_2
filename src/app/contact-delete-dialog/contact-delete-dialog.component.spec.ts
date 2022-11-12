import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeleteDialogComponent } from './contact-delete-dialog.component';

describe('ContactDeleteDialogComponent', () => {
  let component: ContactDeleteDialogComponent;
  let fixture: ComponentFixture<ContactDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
