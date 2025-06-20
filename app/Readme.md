Buy Me a Coffee: A modern crowdfunding platform designed to help digital creators monetize their work and build community support.

Overview
Buy Me a Coffee is a full-stack web application that empowers content creators—such as writers, artists, educators, and developers—to receive one-time or recurring contributions from their audience. The platform offers secure authentication and seamless payment processing, making it easy for supporters to show appreciation and for creators to focus on their work.Secure Authentication using Auth.js for user signup, login, and session management integrated with Razorpay payment gateway for smooth and secure transactions.

What the Project Does

Allows visitors to discover and support digital creators by making small contributions.
Enables creators to create profiles, set up donation tiers, and view contribution history.
Provides a dashboard for creators to manage their content, track earnings, and engage with supporters.

Who It Is For

Digital creators such as bloggers, YouTubers, podcasters, open-source developers, and educators.
Supporters and fans who want to contribute directly to the work of creators they value.

Why It Is Useful

Direct monetization that reduces fees and middlemen costs.
Small-donations that allow fans to support with any amount.
Community engagement through payment messages and notifications.

Tech Stack

Frontend: Next.js, React
Authentication: Auth.js (NextAuth)
Backend: Node.js, Express.js (REST API)
Database: MongoDB (MongoDB Atlas)
Payments: Razorpay
Styling: Tailwind CSS

Installation and Setup

Install dependencies:
npm install

Configuring environment variables by creating a .env file in the root directory:

GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
NEXT_PUBLIC_KEY_ID=your_razorpay_key_id
KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
MONGO_URI=your_mongodb_connection_uri

Running the application:
Start MongoDB locally or ensure your Atlas cluster is running.

Start the server:
npm run dev
Open your browser and navigate to http://localhost:3000.

Usage:

As a Creator: Sign up, set up your profile, define donation tiers, and share your public link.
As a Supporter: Browse creator profiles, select a donation amount, and complete payment via Razorpay.

Live Demo: https://buy-me-a-coffee.example.com

GitHub Repository: https://github.com/your-username/buy-me-a-coffee

Developed by Prakash Shaw (https://github.com/Prakash97971).