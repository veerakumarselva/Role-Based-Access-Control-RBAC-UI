
# Role-Based Access Control (RBAC) System

This project is a simple implementation of authentication, authorization, and Role-Based Access Control (RBAC) using Node.js, Express, and MongoDB.

## Features

- User Registration and Login with JWT-based authentication.
- Role-Based Access Control (RBAC) with roles: Admin, User, and Moderator.
- Protected routes based on roles and authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/rbac-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rbac-system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the `config` directory and configure the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/rbac_system
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Log in and get a JWT token.

### User Routes
- `GET /users` - Access restricted to Admins.
- `GET /users/profile` - Access for authenticated users.

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing

## License

This project is licensed under the MIT License.
