import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListListComponent } from './price-list-list.component';

describe('PriceListListComponent', () => {
  let component: PriceListListComponent;
  let fixture: ComponentFixture<PriceListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
