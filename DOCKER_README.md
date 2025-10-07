# Docker Setup for Authorization Project

This project includes Docker configurations for both development and production environments.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Project Structure

```
.
├── Backend/
│   ├── Dockerfile          # Production Dockerfile
│   ├── Dockerfile.dev      # Development Dockerfile
│   └── ...
├── Frontend/
│   ├── Dockerfile          # Production Dockerfile
│   ├── Dockerfile.dev      # Development Dockerfile
│   └── ...
├── docker-compose.yml      # Production setup
├── docker-compose.dev.yml  # Development setup
└── ...
```

## Environment Variables

Before running the Docker containers, make sure to create a `.env` file in the root directory with the necessary environment variables. You can use `.envdummy` as a reference.

Example `.env` file:
```
PORT=5000
MONGO_URI=mongodb://root:password@mongodb:27017/authorization?authSource=admin
JWT_SECRET=your_jwt_secret_here
NODE_ENV=production
```

## Development Setup

To run the project in development mode with hot reloading:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This will start:
- MongoDB database on port 27017
- Backend API on port 5000
- Frontend development server on port 5173

## Production Setup

To run the project in production mode:

```bash
docker-compose up --build
```

This will start:
- MongoDB database on port 27017
- Backend API on port 5000
- Frontend static server on port 3000

## Stopping the Services

To stop the services:

```bash
# For development
docker-compose -f docker-compose.dev.yml down

# For production
docker-compose down
```

## Accessing the Application

- Frontend: http://localhost:5173 (development) or http://localhost:3000 (production)
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017

## Notes

- The development setup uses volume mounting for live code updates
- The production setup builds optimized versions of both frontend and backend
- MongoDB data is persisted in a Docker volume