import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSessionComponent } from './login-session.component';

describe('LoginSessionComponent', () => {
  let component: LoginSessionComponent;
  let fixture: ComponentFixture<LoginSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
