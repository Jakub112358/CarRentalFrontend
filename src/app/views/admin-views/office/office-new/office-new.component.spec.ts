import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeNewComponent } from './office-new.component';

describe('OfficeNewComponent', () => {
  let component: OfficeNewComponent;
  let fixture: ComponentFixture<OfficeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
