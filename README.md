# App

A responsive web application built with Vite, React (using functional components and hooks), TypeScript, Tailwind CSS, and GraphQL. This project includes features such as a paginated list of posts, detailed post views, and a like button. Authentication is handled using a Bearer token.

## Features

- **Post Gallery**: Display posts in a grid or list view with pagination.
- **Post Details**: View detailed information about a post by clicking on it.
- **Like Button**: Like posts from both the gallery and detail views, with real-time updates.
- **Authentication**: Bearer token authentication with Apollo Client.

## Tech Stack

- **Frontend**: Vite, React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **State Management**: Apollo Client (GraphQL)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:harmeetjaipur/testing-with-gql.git
   cd testing-with-gql
   npm i
   npm run dev
   ```

   Use `node 18.x.x` for best results

2. Run tests with:

   ```
   npm test
   ```

3. Folder structure:

   ```
   app/
   ├── build/
   │ └── ...
   ├── dist/
   │ └── ... (generated files)
   ├── public/
   │ └── ...
   ├── src/
   │ ├── components/
   │ │ ├── Header.tsx
   │ │ └── ProtectedRoute.tsx
   │ ├── pages/
   │ │ ├── Home.tsx
   │ │ ├── Login.tsx
   │ │ ├── Post.tsx
   │ │ └── PostList.tsx
   │ │ └── ...other pages go here
   │ ├── apolloClient.ts
   │ ├── App.tsx
   │ └── index.css
   ├── package.json
   ├── babel.config.js
   └── vite.config.js
   └── ...other configs
   ```

4. Login credentials:

   ```
   username: root
   password: password
   ```
