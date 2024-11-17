📝 Blog App
This is a full-stack blog application built using Next.js 15 and MongoDB. The app allows users to browse, create, edit, and delete blog posts, while providing an admin dashboard for managing posts and subscriptions.

🚀 Features
Full CRUD Functionality: Create, Read, Update, and Delete blog posts.
🔒 Admin Dashboard: Admins can create posts, view all posts, and manage subscription emails.
📱 Responsive Design: Optimized for various devices.
⚡ Next.js SSR/SSG: Server-side rendering and static generation for fast loading.
📦 MongoDB Integration: All data is stored in a MongoDB database.
✨ User-Friendly Interface: Simple and clean design for better usability.

🛠️ Technologies Used
Frontend: Next.js 15
Database: MongoDB
Styling: CSS/Styled Components/Tailwind (select based on what you used)
API: Custom API routes in Next.js

⚙️ Getting Started
Prerequisites
Node.js (v14 or later)
MongoDB (Atlas or local setup)

Installation:
1. Clone the repository or Download it
2. Navigate to the project directory: cd blog-app
3. Install dependencies: npm install
4. Create a .env.local file in the root directory and add the following environment variables:
   MONGO_URI=your-mongodb-connection-string
   
▶️ Running the App
To start the development server: npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

📂 Project Structure
1. pages/: Contains the app's pages and API routes.
2. components/: Reusable UI components.
3. lib/: Utility functions and database connections.
4. styles/: Global and component-specific styles.

🛡️ Admin Dashboard
📝 Create Post: Admins can add new blog posts with a user-friendly editor.
📄 View All Posts: Admins have access to a list of all posts, with options to edit or delete.
📧 Manage Subscriptions: View and manage email subscriptions submitted via the website.

🌐 Usage
Navigate to the homepage to see a list of all blog posts.
Click on a blog to read more.
Use the admin dashboard to create, edit, or delete blog posts and manage subscriptions (access restricted to admin users).

