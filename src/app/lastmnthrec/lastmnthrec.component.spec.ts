import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastmnthrecComponent } from './lastmnthrec.component';

describe('LastmnthrecComponent', () => {
  let component: LastmnthrecComponent;
  let fixture: ComponentFixture<LastmnthrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastmnthrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastmnthrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
