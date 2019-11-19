import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPsychoAndLoginUserComponent } from './search-psycho-and-login-user.component';

describe('SearchPsychoAndLoginUserComponent', () => {
  let component: SearchPsychoAndLoginUserComponent;
  let fixture: ComponentFixture<SearchPsychoAndLoginUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPsychoAndLoginUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPsychoAndLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
