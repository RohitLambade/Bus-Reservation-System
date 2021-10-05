import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngschedComponent } from './chngsched.component';

describe('ChngschedComponent', () => {
  let component: ChngschedComponent;
  let fixture: ComponentFixture<ChngschedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChngschedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
