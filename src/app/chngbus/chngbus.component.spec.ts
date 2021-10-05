import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngbusComponent } from './chngbus.component';

describe('ChngbusComponent', () => {
  let component: ChngbusComponent;
  let fixture: ComponentFixture<ChngbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChngbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
