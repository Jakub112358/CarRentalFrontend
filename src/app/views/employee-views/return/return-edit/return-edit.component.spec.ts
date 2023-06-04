import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnEditComponent } from './return-edit.component';

describe('ReturnEditComponent', () => {
  let component: ReturnEditComponent;
  let fixture: ComponentFixture<ReturnEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
