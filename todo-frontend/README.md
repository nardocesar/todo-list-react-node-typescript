# To-Do List Application (Node.js, React, TypeScript)

This is a simple To-Do List application built using **Node.js**, **Express**, **SQLite**, **Prisma**, **React**, and **TypeScript**. The application allows users to add, view, update, delete tasks, and filter them based on completion status.

## Features

### Backend:

- RESTful API built with **Node.js** and **Express**
- Task management routes:
  - `GET /api/tasks`: Get all tasks
  - `POST /api/tasks`: Create a new task
  - `PATCH /api/tasks/:id`: Update task title or mark as complete/incomplete
  - `DELETE /api/tasks/:id`: Delete a task by its ID
- **SQLite** database for storage
- ORM: **Prisma**

### Frontend:

- Built with **React** and **TypeScript**
- Form to add tasks
- Task list with the ability to delete or update tasks
- Task filtering (all/completed/uncompleted)
- State management using **React Hooks**
- Communication with backend via **Axios**

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed
- **SQLite** (optional, but included via Prisma migrations)

### Installation

#### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database using **Prisma**:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

   The backend will start at `http://localhost:5000`.

#### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

   The frontend will start at `http://localhost:3000`.

## Usage

- **Add a Task**: Enter the task title in the form and click "Add Task".
- **View Tasks**: All tasks are listed, and you can toggle between completed and incomplete tasks.
- **Update a Task**: Click the "Mark as Complete" or "Mark as Incomplete" button to update task status.
- **Delete a Task**: Click the "Delete" button to remove the task from the list.
- **Filter Tasks**: Use the filter dropdown to view all, completed, or uncompleted tasks.

## Technologies Used

- **Backend**: Node.js, Express, SQLite, Prisma, TypeScript
- **Frontend**: React, Axios, TypeScript

## License

This project is licensed under the MIT License.
