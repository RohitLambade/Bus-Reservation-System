import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPDFComponent } from './print-pdf.component';

describe('PrintPDFComponent', () => {
  let component: PrintPDFComponent;
  let fixture: ComponentFixture<PrintPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
