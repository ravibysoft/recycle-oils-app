import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep1 } from './registration-step1';

describe('RegistrationStep1', () => {
  let component: RegistrationStep1;
  let fixture: ComponentFixture<RegistrationStep1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStep1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStep1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
