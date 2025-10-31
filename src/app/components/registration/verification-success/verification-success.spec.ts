import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSuccess } from './verification-success';

describe('VerificationSuccess', () => {
  let component: VerificationSuccess;
  let fixture: ComponentFixture<VerificationSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
