import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep3 } from './registration-step3';

describe('RegistrationStep3', () => {
  let component: RegistrationStep3;
  let fixture: ComponentFixture<RegistrationStep3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStep3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStep3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
