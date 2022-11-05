import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddRouterComponent } from './task-add-router.component';

describe('TaskAddRouterComponent', () => {
  let component: TaskAddRouterComponent;
  let fixture: ComponentFixture<TaskAddRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAddRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
