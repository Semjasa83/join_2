import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskouterComponent } from './addtaskouter.component';

describe('AddtaskouterComponent', () => {
  let component: AddtaskouterComponent;
  let fixture: ComponentFixture<AddtaskouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtaskouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtaskouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
