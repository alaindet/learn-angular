import { HttpClientModule } from '@angular/common/http';
import { render, screen, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer, SetupServerApi } from 'msw/node';

import { SignUpComponent } from './sign-up.component';

let mockServerRequestBody: any;
let mockServerRequestCount = 0;
let mockServer: SetupServerApi;

const setupMockServer = async () => {
  mockServer = setupServer(
    rest.post('/api/1.0/users', (req, res, ctx) => {
      mockServerRequestBody = req.body;
      mockServerRequestCount++;
      return res(
        ctx.delay(50),
        ctx.status(201),
        ctx.json({}),
      );
    }),
  );
};

const setup = async () => {
  await render(SignUpComponent, {
    imports: [HttpClientModule],
  });
};

describe('SignUpComponent', () => {

  describe('Layout', () => {

    it('has Sign Up header', async () => {
      await setup();
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has username input', async () => {
      await setup();
      const label = screen.getByLabelText('Username');
      expect(label).toBeInTheDocument();
    });

    it('has email input', async () => {
      await setup();
      const label = screen.getByLabelText('Email');
      expect(label).toBeInTheDocument();
    });

    it('has email type for email input', async () => {
      await setup();
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('has password input', async () => {
      await setup();
      const label = screen.getByLabelText('Password');
      expect(label).toBeInTheDocument();
    });

    it('has password type for password input', async () => {
      await setup();
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('has password confirm input', async () => {
      await setup();
      const label = screen.getByLabelText('Confirm Password');
      expect(label).toBeInTheDocument();
    });

    it('has password type for password confirm input', async () => {
      await setup();
      const input = screen.getByLabelText('Confirm Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('has Sign Up button', async () => {
      await setup();
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('has Sign Up button disabled initially', async () => {
      await setup();
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {

    let submitButton: HTMLButtonElement;

    const getValidPayload = () => ({
      username: 'user1',
      email: 'user1@example.com',
      password: 'P4ssword',
    });

    const fillValidForm = async () => {
      const payload = getValidPayload();

      const username = screen.getByLabelText('Username');
      await userEvent.type(username, payload.username);

      const email = screen.getByLabelText('Email');
      await userEvent.type(email, payload.email);

      const pwd = screen.getByLabelText('Password');
      await userEvent.type(pwd, payload.password);

      const pwd2 = screen.getByLabelText('Confirm Password');
      await userEvent.type(pwd2, payload.password);

      submitButton = screen.getByRole('button', { name: 'Sign Up' });
    };

    beforeAll(() => {
      setupMockServer();
      mockServer.listen();
    });

    beforeEach(() => {
      mockServerRequestCount = 0;
    });

    afterAll(() => {
      mockServer.close();
    });

    it('enables button when password and password confirm match', async () => {
      await setup();
      await fillValidForm();
      expect(submitButton).toBeEnabled();
    });

    it('sends username, email and password to server after submitting', async () => {
      await setup();
      await fillValidForm();
      const payload = getValidPayload();
      await userEvent.click(submitButton);
      await waitFor(() => expect(mockServerRequestBody).toEqual(payload));
    });

    it('disables button while performing API call', async () => {
      await setup();
      await fillValidForm();
      await userEvent.click(submitButton);
      await userEvent.click(submitButton);
      await waitFor(() => expect(mockServerRequestCount).toBe(1));
    });

    it('does not display spinner while form is idle', async () => {
      await setup();
      await fillValidForm();
      expect(screen.queryByRole('status', { hidden: true })).not.toBeInTheDocument();
    });

    it('displays spinner after submitting', async () => {
      await setup();
      await fillValidForm();
      await userEvent.click(submitButton);
      expect(screen.queryByRole('status', { hidden: true })).toBeInTheDocument();
    });
  });
});
