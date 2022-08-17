import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from 'App';

test('Get Detail Text', async () => {
  render(<App />);
  expect(
    screen.getByText(
      'This is a simple contact form built with React, TypeScript, TailwindCSS and React Hook Form. Made by Ali Burak Ozden'
    )
  ).toBeInTheDocument();
});

test('Heading Content', async () => {
  render(<App />);
  expect(screen.getByText('NexGen Contact Form')).toBeInTheDocument();
});

test('Get Required Error For Name Field', async () => {
  render(<App />);

  const inputField = screen.getByPlaceholderText('Enter your name');

  await waitFor(async () => {
    inputField.focus();
  });

  expect(inputField).toHaveFocus();

  inputField.blur();

  await waitFor(async () => {
    expect(inputField).not.toHaveFocus();
  });

  expect(screen.getByText('Required Field')).toBeInTheDocument();

  // expect(screen.getByText('Required Field')).toBeInTheDocument();
});
