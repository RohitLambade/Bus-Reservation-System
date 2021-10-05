import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedloginComponent } from './proceedlogin.component';

describe('ProceedloginComponent', () => {
  let component: ProceedloginComponent;
  let fixture: ComponentFixture<ProceedloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
