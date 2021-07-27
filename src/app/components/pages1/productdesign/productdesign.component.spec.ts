import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdesignComponent } from './productdesign.component';

describe('ProductdesignComponent', () => {
  let component: ProductdesignComponent;
  let fixture: ComponentFixture<ProductdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
