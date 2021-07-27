import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IieaGalleryComponent } from './iiea-gallery.component';

describe('IieaGalleryComponent', () => {
  let component: IieaGalleryComponent;
  let fixture: ComponentFixture<IieaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IieaGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IieaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
