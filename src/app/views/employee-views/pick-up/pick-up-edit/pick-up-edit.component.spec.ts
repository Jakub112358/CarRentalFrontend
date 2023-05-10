import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpEditComponent } from './pick-up-edit.component';

describe('PickUpEditComponent', () => {
  let component: PickUpEditComponent;
  let fixture: ComponentFixture<PickUpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickUpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
