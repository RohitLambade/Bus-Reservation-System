import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbusComponent } from './getbus.component';

describe('GetbusComponent', () => {
  let component: GetbusComponent;
  let fixture: ComponentFixture<GetbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
