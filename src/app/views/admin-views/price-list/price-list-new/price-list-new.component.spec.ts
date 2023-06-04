import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListNewComponent } from './price-list-new.component';

describe('PriceListNewComponent', () => {
  let component: PriceListNewComponent;
  let fixture: ComponentFixture<PriceListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
