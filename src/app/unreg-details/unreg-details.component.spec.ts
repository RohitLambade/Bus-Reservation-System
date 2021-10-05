import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregDetailsComponent } from './unreg-details.component';

describe('UnregDetailsComponent', () => {
  let component: UnregDetailsComponent;
  let fixture: ComponentFixture<UnregDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
