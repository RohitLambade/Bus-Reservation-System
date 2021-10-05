import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregorregComponent } from './unregorreg.component';

describe('UnregorregComponent', () => {
  let component: UnregorregComponent;
  let fixture: ComponentFixture<UnregorregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregorregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregorregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
