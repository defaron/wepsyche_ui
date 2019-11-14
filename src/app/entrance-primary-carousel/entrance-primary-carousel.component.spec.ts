import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancePrimaryCarouselComponent } from './entrance-primary-carousel.component';

describe('EntrancePrimaryCarouselComponent', () => {
  let component: EntrancePrimaryCarouselComponent;
  let fixture: ComponentFixture<EntrancePrimaryCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrancePrimaryCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrancePrimaryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
