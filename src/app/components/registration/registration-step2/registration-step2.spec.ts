import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep2 } from './registration-step2';

describe('RegistrationStep2', () => {
  let component: RegistrationStep2;
  let fixture: ComponentFixture<RegistrationStep2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStep2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStep2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
