import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqroutesComponent } from './freqroutes.component';

describe('FreqroutesComponent', () => {
  let component: FreqroutesComponent;
  let fixture: ComponentFixture<FreqroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
