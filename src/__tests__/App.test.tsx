import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from 'App';
import { act } from 'react-dom/test-utils';

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

  await waitFor(async () => {
    expect(inputField).toHaveAttribute('error');
  });

  expect(screen.getByText('Required Field')).toBeInTheDocument();
});

test('Get Verified After Error for Name Field', async () => {
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

  await waitFor(async () => {
    expect(inputField).toHaveAttribute('error');
  });

  expect(screen.getByText('Required Field')).toBeInTheDocument();

  // After Getting Error, Enter a Valid Name and expect a verified state

  await waitFor(async () => {
    inputField.focus();
  });

  expect(inputField).toHaveFocus();

  act(() => {
    inputField.setAttribute('value', 'This is a test');
  });

  await waitFor(async () => {
    expect(inputField).toHaveValue('This is a test');
  });

  inputField.blur();

  await waitFor(async () => {
    expect(inputField).not.toHaveFocus();
  });

  await waitFor(async () => {
    expect(inputField).not.toHaveAttribute('error');
  });

  expect(screen.queryByText('Required Field')).not.toBeInTheDocument();
});

test('Get Errors when Submitting Form', async () => {
  render(<App />);
  const submitButton = screen.getByText('Submit');
  const inputField = screen.getByPlaceholderText('Enter your name');

  await waitFor(async () => {
    submitButton.focus();
  });

  expect(submitButton).toHaveFocus();

  act(() => {
    submitButton.click();
  });

  await waitFor(async () => {
    expect(inputField).toHaveAttribute('error');
  });

  expect(screen.getAllByText('Required Field')[0]).toBeInTheDocument();
});
