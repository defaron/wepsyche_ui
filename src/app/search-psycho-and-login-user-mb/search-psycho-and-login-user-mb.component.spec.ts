import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPsychoAndLoginUserMbComponent } from './search-psycho-and-login-user-mb.component';

describe('SearchPsychoAndLoginUserMbComponent', () => {
  let component: SearchPsychoAndLoginUserMbComponent;
  let fixture: ComponentFixture<SearchPsychoAndLoginUserMbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPsychoAndLoginUserMbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPsychoAndLoginUserMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
