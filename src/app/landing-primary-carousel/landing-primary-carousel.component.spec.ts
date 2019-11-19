import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPrimaryCarouselComponent } from './landing-primary-carousel.component';

describe('LandingPrimaryCarouselComponent', () => {
  let component: LandingPrimaryCarouselComponent;
  let fixture: ComponentFixture<LandingPrimaryCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPrimaryCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPrimaryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
