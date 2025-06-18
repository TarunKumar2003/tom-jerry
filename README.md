# Namaste React Project

## Overview

The Namaste React Project is a web application built using React that provides a user interface for authentication and browsing content. The application features a login form that allows users to sign in or sign up, and a browsing page for accessing content.

## Project Structure

```
Namaste-React-Project
├── src
│   ├── components
│   │   ├── Body.jsx        # Sets up routing for the application
│   │   ├── Browse.jsx      # Renders the browsing page
│   │   ├── Header.jsx      # Displays the header with a logo
│   │   └── Login.jsx       # Manages user authentication forms
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Components

### Body.jsx

- Sets up routing using React Router.
- Defines two routes:
  - `/` - Renders the `Login` component.
  - `/browse` - Renders the `Browse` component.

### Browse.jsx

- A functional component that displays a heading with the text "Browse".

### Header.jsx

- A functional component that displays a header section with a logo image and a gradient background.

### Login.jsx

- A functional component that manages the state for toggling between sign-in and sign-up forms.
- Renders a form with input fields for email and password, and conditionally includes a full name input field for sign-up.
- Includes a button to submit the form and a link to toggle between sign-in and sign-up.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Namaste-React-Project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm start
```

This will launch the application in your default web browser.

## License

This project is licensed under the MIT License.
