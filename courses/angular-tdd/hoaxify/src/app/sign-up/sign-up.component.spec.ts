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
      expect(h1?.textContent?.trim()).toBe('Sign Up');
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
      expect(button?.textContent).toBe('Sign Up');
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
      const signUp = fixture.nativeElement as HTMLElement;
      const payload = getValidPayload();

      // Simulate filling the form
      const username = signUp.querySelector('input[id="username"]') as HTMLInputElement;
      username.value = payload.username;
      username.dispatchEvent(new Event('input'));

      const email = signUp.querySelector('input[id="email"]') as HTMLInputElement;
      email.value = payload.email;
      email.dispatchEvent(new Event('input'));

      const pwd = signUp.querySelector('input[id="password"]') as HTMLInputElement;
      pwd.value = payload.password;
      pwd.dispatchEvent(new Event('input'));

      const pwd2 = signUp.querySelector('input[id="password-confirm"]') as HTMLInputElement;
      pwd2.value = payload.password;
      pwd2.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      submitButton = signUp.querySelector('button');
    };

    it('enables button when password and password confirm match', () => {
      fillValidForm();
      expect(submitButton?.disabled).toBeFalsy();
    });

    it('sends username, email and password to server after clicking button', () => {
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
  });
});
