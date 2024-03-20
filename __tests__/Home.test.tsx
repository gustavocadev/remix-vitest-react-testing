import { render, screen, waitFor } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';
import HomePage from '~/routes/_index';
import { json } from '@remix-run/node';
import { describe, it } from 'vitest';

describe('Home Page', () => {
  it('should render the home page', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: HomePage,
        loader() {
          return json({ message: 'hello' });
        },
      },
    ]);

    render(<RemixStub />);

    await waitFor(() => screen.getByText('Welcome to Remix'));
  });

  it('should render the hello message', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: HomePage,
        loader() {
          return json({ message: 'hiya' });
        },
      },
    ]);

    render(<RemixStub />);

    await waitFor(() => screen.getByText('hiya'));
  });
});
