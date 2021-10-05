import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetscheduleComponent } from './getschedule.component';

describe('GetscheduleComponent', () => {
  let component: GetscheduleComponent;
  let fixture: ComponentFixture<GetscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
