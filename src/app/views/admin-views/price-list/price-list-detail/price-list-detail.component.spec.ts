import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListDetailComponent } from './price-list-detail.component';

describe('PriceListDetailComponent', () => {
  let component: PriceListDetailComponent;
  let fixture: ComponentFixture<PriceListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
