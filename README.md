This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


```markdown
# JobHuntWithMe 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-000000.svg?logo=next.js)](https://nextjs.org/)

A modern job board platform connecting employers with job seekers, built with Next.js 15, TypeScript, and MongoDB.

![JobHuntWithMe Screenshot](./public/screenshot.png)

## Features ✨

### Job Seekers
- Browse latest job listings
- Search jobs by title/description
- View detailed job information
- Direct application links
- Responsive design

### Employers/Admins
- Secure admin dashboard
- Create/Manage job postings
- Rich text editing for job details
- Instant job publishing
- Application tracking

## Technologies Used 💻

- **Frontend**: 
  - Next.js 15 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components

- **Backend**:
  - Next.js API Routes
  - MongoDB (Atlas)
  - Mongoose ODM

- **Utilities**:
  - ESLint
  - Prettier
  - React Icons

## Getting Started 🛠️

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rameshbellani/job-posting.git
cd jobhuntwithme
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

4. Run development server:
```bash
npm run dev
```

## Deployment 🚀

1. Create Vercel account
2. Connect your GitHub repository
3. Add environment variables:
   - `MONGODB_URI`
4. Deploy!


## Folder Structure 📁

```
src/
├── app/
│   ├── (user)/          # Public routes
│   │   ├── jobs/
│   │   ├── about/
│   │   └── ...
│   ├── admin/           # Admin routes
│   ├── api/             # API endpoints
│   └── layouts/         # Layout components
├── components/          # Reusable components
├── lib/                 # Utility functions
├── models/              # MongoDB models
└── public/              # Static assets
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Job Hunting!** 👔 | **Find Top Talent!** 💼
```

Key elements included:
1. Badges for quick project status overview
2. Clear feature separation for job seekers and employers
3. Detailed technology stack breakdown
4. Step-by-step installation guide
5. Deployment instructions
6. Visual folder structure
7. Contribution guidelines
8. License information

You can customize this further by:
1. Adding actual screenshot paths
2. Including specific API documentation
3. Adding test instructions
4. Expanding the FAQ section
5. Including analytics setup instructions for AdSense

