import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  describe('Layout', () => {

    it('has Sign Up header', async () => {
      await render(SignUpComponent);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has username input', async () => {
      await render(SignUpComponent);
      const label = screen.getByLabelText('Username');
      expect(label).toBeInTheDocument();
    });

    it('has email input', async () => {
      await render(SignUpComponent);
      const label = screen.getByLabelText('Email');
      expect(label).toBeInTheDocument();
    });

    it('has email type for email input', async () => {
      await render(SignUpComponent);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('has password input', async () => {
      await render(SignUpComponent);
      const label = screen.getByLabelText('Password');
      expect(label).toBeInTheDocument();
    });

    it('has password type for password input', async () => {
      await render(SignUpComponent);
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('has password confirm input', async () => {
      await render(SignUpComponent);
      const label = screen.getByLabelText('Confirm Password');
      expect(label).toBeInTheDocument();
    });

    it('has password type for password confirm input', async () => {
      await render(SignUpComponent);
      const input = screen.getByLabelText('Confirm Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('has Sign Up button', async () => {
      await render(SignUpComponent);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('has Sign Up button disabled initially', async () => {
      await render(SignUpComponent);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });

    describe('Interactions', () => {

      it('enables button when password and password confirm match', async () => {
        await render(SignUpComponent);
        const pwd = screen.getByLabelText('Password');
        const pwd2 = screen.getByLabelText('Confirm Password');
        await userEvent.type(pwd, 'P4ssword');
        await userEvent.type(pwd2, 'P4ssword');
        const button = screen.getByRole('button', { name: 'Sign Up' });
        expect(button).toBeEnabled();
      });

      it('sends username, email and password to server after clicking button', async () => {
        const fetchSpy = jest.spyOn(window, 'fetch');
        const payload = {
          username: 'user1',
          email: 'user1@example.com',
          password: 'P4ssword',
        };

        await render(SignUpComponent);

        const username = screen.getByLabelText('Username');
        await userEvent.type(username, payload.username);

        const email = screen.getByLabelText('Email');
        await userEvent.type(email, payload.email);

        const pwd = screen.getByLabelText('Password');
        await userEvent.type(pwd, payload.password);

        const pwd2 = screen.getByLabelText('Confirm Password');
        await userEvent.type(pwd2, payload.password);

        const button = screen.getByRole('button', { name: 'Sign Up' });
        await userEvent.click(button);

        const args = fetchSpy.mock.calls[0];
        const fetchOptions = args[1] as RequestInit;
        expect(fetchOptions.body).toEqual(JSON.stringify(payload));
      });
    });
  });
});
