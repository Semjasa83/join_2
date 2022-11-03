import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailPopupComponent } from './contacts-detail-popup.component';

describe('ContactsDetailPopupComponent', () => {
  let component: ContactsDetailPopupComponent;
  let fixture: ComponentFixture<ContactsDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDetailPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
