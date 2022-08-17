# Nex-Gen LLC Front-End Interview Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

The purpose of this assignment is implementing the commonly used HTML Form elements with the help of ReactJS. The form should be able to validate the input fields and display the error messages and submit the data to the server and display the response.

## Features

Available Form Elements:

- text - password - email - file - localDate - color - checkbox - number - tel - url - date - datetime-local - select - radio - textarea

For the form validation Yup library is used.

## How to use the App

Fill the form and click on the submit button. The form will validate the input fields and display the error messages if there is any. If the form is valid, it will submit the data to the server and display both the response from the server and the submitted data at the bottom of the page.

## Technology Stack

- ReactJS
- TypeScript
- HTML & CSS
- TailwindCSS
- React Hook Form & Yup
- React Hot Toast

## Server API

For the API service, I have deployed a Firebase Cloud Function.
The API is available at https://us-central1-firebase-email-me.cloudfunctions.net/saveData

It basically accepts the form data as a JSON object and returns the same data as a response with this sample code:

```js
export const saveData = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    return response.status(200).send(request.body);
  });
});
```

## Linting

For linting, I have used ESLint with the help of the following plugins:

- eslint
- eslint-config-airbnb
- eslint-config-airbnb-typescript
- eslint-config-prettier
- eslint-config-standard-with-typescript
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks

## Deployment

For the deployment, I have used Vercel. The live app is available [here](https://nex-gen-contact-form.vercel.app/)

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.
The tests are written using Jest and React Testing Library. \
Cases covered in the tests are basic rendering, form validation and form submission.
