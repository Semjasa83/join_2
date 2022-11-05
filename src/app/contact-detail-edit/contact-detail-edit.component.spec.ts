import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailEditComponent } from './contact-detail-edit.component';

describe('ContactDetailEditComponent', () => {
  let component: ContactDetailEditComponent;
  let fixture: ComponentFixture<ContactDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
