# Sorpasso

Sorpasso is a modern web application for "Il Sorpasso", a vintage car rental service primarily targeting the cinema and film industry. It provides a sleek online presence to showcase available classic vehicles and facilitates inquiries through a robust contact form system.

## Key Features

*   **Vintage Vehicle Showcase**: A visually rich display of classic cars, likely featuring dynamic carousels or galleries.
*   **Effortless Contact Form**: An integrated form allowing prospective clients to easily send inquiries, with automated email notifications for the service owner.
*   **Responsive & Modern Design**: A clean, contemporary user interface built with Tailwind CSS, ensuring a consistent experience across various devices.
*   **Automated Email Notifications**: Backend functions automatically process contact form submissions and send detailed emails to the business owner, streamlining communication.

## Tech Stack

The project leverages a modern full-stack JavaScript ecosystem:

*   **Frontend**:
    *   [Vue.js](https://vuejs.org/): A progressive JavaScript framework for building user interfaces.
    *   [Vite](https://vitejs.dev/): A fast frontend build tool.
    *   [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript for enhanced code quality and maintainability.
    *   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development and responsive design.
    *   [Swiper.js](https://swiperjs.com/): A popular touch slider for creating modern carousels (inferred from CSS).
*   **Backend**:
    *   [Firebase](https://firebase.google.com/): A Google-backed platform for web and mobile application development, used for:
        *   **Firestore**: A NoSQL document database for storing contact requests.
        *   **Cloud Functions**: Serverless functions handling backend logic, specifically for sending emails.
    *   [Node.js](https://nodejs.org/): The JavaScript runtime environment for Firebase Functions.
    *   [Nodemailer](https://nodemailer.com/): A module for Node.js applications to send emails.

## Getting Started

To get the Sorpasso project up and running locally, follow these steps:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (usually comes with Node.js)
*   Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```
*   A Firebase project configured with Firestore and Cloud Functions.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sorpasso.git # Replace with actual repo URL
cd sorpasso
```

### 2. Frontend Setup

Navigate to the project root directory and install dependencies:

```bash
npm install
```

To start the development server for the frontend:

```bash
npm run dev
```

This will typically run the Vue application on `http://localhost:5173/` (or a similar port).

### 3. Firebase Functions Setup

Navigate into the `functions` directory:

```bash
cd functions
npm install
```

**Firebase Authentication & Project Linking:**

First, log in to Firebase using your Google account:

```bash
firebase login
```

Then, link your local project to your Firebase project. Replace `<your-firebase-project-id>` with your actual Firebase project ID:

```bash
firebase use --add <your-firebase-project-id>
```

**Configure Gmail Credentials:**

The `sendContactEmail` function uses Nodemailer with Gmail. You need to set up your Gmail credentials (email and an [App Password](https://support.google.com/accounts/answer/185833?hl=en)) as Firebase environment configuration variables.

```bash
firebase functions:config:set gmail.email="your_gmail_account@gmail.com" gmail.pass="your_gmail_app_password"
```

Remember to replace `your_gmail_account@gmail.com` and `your_gmail_app_password` with your actual credentials. Using an App Password is crucial for security if you have 2-Factor Authentication enabled.

**Deploy or Emulate Functions:**

*   **To deploy the functions to Firebase:**
    ```bash
    npm run deploy
    ```

*   **To run functions locally using the Firebase Emulator Suite:**
    ```bash
    npm run serve
    ```
    This will start the Firebase emulators, allowing you to test functions locally without deploying them. Ensure your frontend is configured to point to the emulated functions if testing locally.

Once the functions are deployed or emulated, any new document created in the `contact_requests` collection in your Firestore database will trigger an email notification.