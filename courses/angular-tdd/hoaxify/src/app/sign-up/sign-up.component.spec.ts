import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SignUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Layout', () => {
    it('has Sign Up header', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const h1 = signUp.querySelector('h1');
      expect(h1?.textContent).toContain('Sign Up');
    });

    it('has username input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="username"]');
      const input = signUp.querySelector('input[id="username"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Username');
    });

    it('has email input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="email"]');
      const input = signUp.querySelector('input[id="email"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Email');
    });

    it('has email type for email input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector('input[id="email"]') as HTMLInputElement;
      expect(input.type).toBe('email');
    });

    it('has password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="password"]');
      const input = signUp.querySelector('input[id="password"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Password');
    });

    it('has password type for password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector('input[id="password"]') as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('has password confirm input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="password-confirm"]');
      const input = signUp.querySelector('input[id="password-confirm"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Confirm Password');
    });

    it('has password type for password confirm input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector('input[id="password-confirm"]') as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('has Sign Up button', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button?.textContent).toContain('Sign Up');
    });

    it('has Sign Up button disabled initially', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeTruthy();
    });
  });

  describe('Interactions', () => {

    let httpController: HttpTestingController;
    let submitButton: HTMLButtonElement | null;
    let signUpEl: HTMLElement;

    const getValidPayload = () => ({
      username: 'user1',
      email: 'user1@example.com',
      password: 'P4ssword',
    });

    const fillValidForm = () => {
      httpController = TestBed.inject(HttpTestingController);
      signUpEl = fixture.nativeElement as HTMLElement;
      const payload = getValidPayload();

      // Simulate filling the form
      const username = signUpEl.querySelector('input[id="username"]') as HTMLInputElement;
      username.value = payload.username;
      username.dispatchEvent(new Event('input'));

      const email = signUpEl.querySelector('input[id="email"]') as HTMLInputElement;
      email.value = payload.email;
      email.dispatchEvent(new Event('input'));

      const pwd = signUpEl.querySelector('input[id="password"]') as HTMLInputElement;
      pwd.value = payload.password;
      pwd.dispatchEvent(new Event('input'));

      const pwd2 = signUpEl.querySelector('input[id="password-confirm"]') as HTMLInputElement;
      pwd2.value = payload.password;
      pwd2.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      submitButton = signUpEl.querySelector('button');
    };

    it('enables button when password and password confirm match', () => {
      fillValidForm();
      expect(submitButton?.disabled).toBeFalsy();
    });

    it('sends username, email and password to server after submitting', () => {
      fillValidForm();
      submitButton?.click();
      const req = httpController.expectOne('/api/1.0/users');
      const payload = getValidPayload();
      expect(req.request.body).toEqual(payload);
    });

    it('disables button while performing API call', () => {
      fillValidForm();
      submitButton?.click();
      fixture.detectChanges();
      submitButton?.click();
      httpController.expectOne('/api/1.0/users');
      expect(submitButton?.disabled).toBeTruthy();
    });

    it('displays spinner after submitting', () => {
      fillValidForm();
      submitButton?.click();
      fixture.detectChanges();
      const spinner = signUpEl.querySelector('span[role="status"]');
      expect(spinner).toBeTruthy();
    });

    it('does not display spinner while form is idle', () => {
      fillValidForm();
      // Here, we did not submit the form!
      const spinner = signUpEl.querySelector('span[role="status"]');
      expect(spinner).toBeFalsy();
    });

    it('displays success alert after sign up request success', () => {
      let alert = signUpEl.querySelector('.alert-success');
      expect(alert).toBeFalsy();
      fillValidForm();
      submitButton?.click();
      const req = httpController.expectOne('/api/1.0/users');
      req.flush({}); // ?
      fixture.detectChanges();
      const successMessage = 'Please check your email to activate your account';
      alert = signUpEl.querySelector('.alert-success');
      expect(alert?.textContent).toContain(successMessage);
    });

    it('hides sign up form after sign up request success', () => {
      fillValidForm();
      expect(signUpEl.querySelector('div[data-test-id="signup-form"]')).toBeTruthy();
      submitButton?.click();
      const req = httpController.expectOne('/api/1.0/users');
      req.flush({}); // ?
      fixture.detectChanges();
      expect(signUpEl.querySelector('div[data-test-id="signup-form"]')).toBeFalsy();
    });
  });
});
