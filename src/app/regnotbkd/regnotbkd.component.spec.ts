import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnotbkdComponent } from './regnotbkd.component';

describe('RegnotbkdComponent', () => {
  let component: RegnotbkdComponent;
  let fixture: ComponentFixture<RegnotbkdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegnotbkdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnotbkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
