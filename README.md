# Vocabulary App Backend

This repository contains the backend for the Vocabulary App. It is designed to manage vocabulary-related features, user authentication, and other backend functionalities. Built using **Express.js** with **TypeScript**, it follows a modular architecture for better scalability and maintainability.

## Features
- User authentication (JWT-based)
- CRUD operations for vocabulary words
- Support for multiple users
- Zod-based input validation
- RESTful API design
- Database integration (MongoDB or other supported DBs)
- Optimized for performance and scalability

## Technology Stack
- **Node.js**: Server-side runtime
- **Express.js**: Web framework
- **TypeScript**: For type safety and better developer experience
- **Zod**: Schema validation for request payloads
- **MongoDB**: Database (can be replaced with other DBs if needed)
- **JWT**: User authentication and authorization
- **Docker**: For containerization (optional)

## Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or remote instance)
- **Docker** (optional, for containerization)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vocabulary-app-backend.git
cd vocabulary-app-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vocabulary-app
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Run the Server
#### Development Mode:
```bash
npm run dev
```

#### Production Mode:
```bash
npm run build
npm start
```

The server will start at `http://localhost:5000` by default.

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Vocabulary Management
- `GET /api/vocabulary`: Get all words
- `POST /api/vocabulary`: Add a new word
- `PUT /api/vocabulary/:id`: Update a word
- `DELETE /api/vocabulary/:id`: Delete a word

### Example Request
#### Add a New Word
**POST** `/api/vocabulary`

**Request Body:**
```json
{
  "word": "example",
  "meaning": "a representative form or pattern",
  "examples": [
    "This sentence is an example of how to use the word."
  ],
  "synonyms": ["illustration", "instance"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "64b0d2b2e1",
    "word": "example",
    "meaning": "a representative form or pattern",
    "examples": [
      "This sentence is an example of how to use the word."
    ],
    "synonyms": ["illustration", "instance"]
  }
}
```

## Scripts
- `npm run dev`: Run the app in development mode with hot reload
- `npm run build`: Build the app for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues

## Testing
(Add this section if you have tests implemented)
- `npm run test`: Run all tests

## Docker (Optional)
You can containerize the app using Docker.

### Build the Docker Image
```bash
docker build -t vocabulary-app-backend .
```

### Run the Container
```bash
docker run -p 5000:5000 -d vocabulary-app-backend
```

## Folder Structure
```
├── src
│   ├── controllers
│   ├── routes
│   ├── middlewares
│   ├── models
│   ├── utils
│   ├── app.ts
│   └── index.ts
├── tests
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)

---
Feel free to open an issue if you encounter any problems or have suggestions!
