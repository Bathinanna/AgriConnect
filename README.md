# AgriConnect

A full-stack application designed to help farmers manage resources, access information, and connect with the agricultural community.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (JWT-based)
- Farmer profile management
- Crop and resource tracking
- Community forum or messaging
- Responsive UI with React
- RESTful API with Node.js & Express
- MongoDB database integration

---

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Other:** dotenv, Mongoose

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

### Clone the repository

```sh
git clone https://github.com/Bathinanna/farmers_webportal.git
cd farmers_webportal
```

### Install dependencies

For both client and server:

```sh
cd client
npm install
cd ../server
npm install
```

### Set up environment variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

**Never commit your `.env` file to version control.**

### Run the application

**Start the backend:**
```sh
cd server
npm start
```

**Start the frontend:**
```sh
cd client
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000) (default).

---

## Available Scripts

In the `client` directory:

- `npm start` — Runs the React app in development mode.
- `npm run build` — Builds the React app for production.
- `npm test` — Runs tests.

In the `server` directory:

- `npm start` — Starts the Express server.
- `npm run dev` — Starts the server with nodemon for development.

---

## Folder Structure

```
farmers_webportal/
│
├── client/         # React frontend
│   └── src/
│
├── server/         # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── .env        # Environment variables (not committed)
│
├── .gitignore
├── README.md
└── package.json
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, contact [Bathinanna](https://github.com/Bathinanna).
