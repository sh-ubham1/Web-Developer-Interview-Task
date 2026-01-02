# Contact Management Application

This Contact Management application is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to manage their contacts by adding, viewing, editing, and deleting contact information. The application also includes search and sorting functionality to enhance the user experience.


## Features

- Display a list of contacts with their names, phone numbers, and email addresses.
- Add new contacts with fields for name, phone number, and email address.
- Edit existing contacts.
- Delete contacts.
- Search for contacts by name.
- Sort contacts by name or other relevant criteria.

## Technologies Used

- MongoDB: Database for storing contact information.
- Express.js: Backend server framework for handling API requests.
- React: Frontend library for building the user interface.
- Node.js: Runtime environment for the server.
- Create React App (CRA): Bootstrap the React application.
- CSS: Styling the application.
- Other libraries and packages as needed.

## Getting Started

To run the Contact Management Application locally, follow these steps:

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Adesh856/Contact_Managment_App.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

3. Install the backend dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and specify your MongoDB connection URL create  .env file on the Backend folder root directory copy and paste it into into env file.

   ```env
   mongourel=<Your MongoDB Atlas url>
   port=5000
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

The backend server should now be running on http://localhost:5000.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd Client/Frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

The frontend server should now be running on http://127.0.0.1:5173/.
## Folder Structure

```
contact-management-app/
├── Backend/                  # Backend server
│   ├── controllers/          # API controllers
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── config.js             # Configuration file
│   ├── server.js             # Express server setup
│   └── ...
├── Client/Frontend/                # ReactVite frontend
│   ├── public/               # Public assets
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── services/         # API service
│   │   ├── App.js            # Main React component
│   │   ├── index.js          # Entry point
│   │   └── ...
│   ├── package.json
│   └── ...
├── .gitignore
├── README.md
└── ...
```


## API Endpoints

- GET `/api/contacts`: Retrieve all contacts.
- GET `/api/contacts/:id`: Retrieve a specific contact by ID.
- POST `/api/contacts`: Create a new contact.
- PUT `/api/contacts/:id`: Update an existing contact.
- DELETE `/api/contacts/:id`: Delete a contact.
- Search `api/contacts/search?name=`: Search by name,email,number

## Deployed Application

You can access the deployed Contact Management Application using the following link:

[Deployed link](https://contact-managmentadesh.netlify.app/)

Feel free to explore and use the application.

## ScreenShots 

<img src="./Client/Frontend/src/Images/Screenshot 2023-09-10 174841.png"></img>



