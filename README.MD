# Aditya Rauniyar - Portfolio Website for a Full Stack Developer

Welcome to **My Portfolio**! This is my personal portfolio for showcasing my skills, projects, experience, education, certifications, and more. It’s built using React, TypeScript, Tailwind CSS, and other modern web technologies. It fetches data from various APIs to display the latest information, such as GitHub repositories, LeetCode submissions, and blogs. The portfolio is responsive, interactive, and optimized for performance.

Check it out live at: [https://adityarauniyar-tech.vercel.app/](https://adityarauniyar-tech.vercel.app/)

---

## 🚀 Features

- **Responsive Design**: The portfolio adjusts to all screen sizes, ensuring an optimal experience on both desktop and mobile devices.
- **Smooth Animations**: Interactive elements, hover effects, and smooth scrolling give the user a pleasant experience.
- **Dynamic Content**: Fetches data from various APIs to display the latest information, such as GitHub repositories, LeetCode submissions, and blogs.
- **Interactive Icons**: Utilizes Lucide icons for a modern and interactive design.
- **SVG Signature Animation**: Framer-Motion is used to animate the SVG signature on the loading page.
- **Dark Mode**: Built with dark mode support using a simple toggle to switch between light and dark themes.
- **Custom Sections**:
  - **Home**: Introduction, Typewriter effect with dynamic roles, and links to key sections.
  - **About**: A section that provides more insight into my background and skills.
  - **Skills**: Displays my technical skills, organized by categories.
  - **Projects**: Showcase of personal and professional projects.
  - **GitHub**: Fetches and displays my GitHub repositories with a link to view the profile.
  - **LeetCode**: Fetches and displays my LeetCode submissions.
  - **Badges**: Displays badges from various platforms like GitHub, LeetCode, and HackerRank.
  - **Blogs**: Fetches and displays my blogs from Hashnode API.
  - **Experience**: Details about my work experience with a timeline layout.
  - **Education**: My academic journey including degree and institution.
  - **Certifications**: Certificates and courses completed with a link to verify.
  - **Contact**: A form to reach out to me directly.
- **SEO Optimized**: Ensures visibility on search engines.
- **Performance Optimized**: Optimized for fast loading with minimal web vitals.

---

## 📂 **Directory Structure**
```
└── portfoliotech-main/
    ├── README.MD
    ├── .env.local
    ├── LICENSE
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── backend/
        |── server.js
        ├── package.json
        ├── packagelocl.json
        ├── .env
    ├── public/
    │   └── assets/
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── About.tsx
        │   ├── Badges.tsx
        │   ├── Blogs.tsx
        │   ├── Certifications.tsx
        │   ├── Contact.tsx
        │   ├── Education.tsx
        │   ├── Experience.tsx
        │   ├── Footer.tsx
        │   ├── GitHub.tsx
        │   ├── Hero.tsx
        │   ├── Leetcode.tsx
        │   ├── Link.tsx
        │   ├── Navbar.tsx
        │   ├── Projects.tsx
        │   ├── Skills.tsx
        │   ├── hero/
        │   │   ├── ActionButtons.tsx
        │   │   ├── ContactInfo.tsx
        │   │   └── SocialLinks.tsx
        │   ├── loading/
        │   │   ├── HandwritingAnimation.tsx
        │   │   ├── LoadingScreen.tsx
        │   │   └── svgPaths.ts
        │   └── ui/
        │       ├── AboutCard.tsx
        │       ├── BlogCard.tsx
        │       ├── CertificationCard.tsx
        │       ├── ContactForm.tsx
        │       ├── CustomCursor.tsx
        │       ├── EducationCard.tsx
        │       ├── ProjectCard.tsx
        │       ├── SectionTitle.tsx
        │       ├── ThemeToggle.tsx
        │       ├── Timeline.tsx
        │       └── TypeWriter.tsx
        └── hooks/
            ├── useAnimatedLogo.ts
            ├── useBlogs.ts
            ├── useLoading.ts
            └── useTheme.ts
```

---
**Note:** When you download this project as a ZIP file, you will not see the backend folder (which contains server.js, .env, and package.json).
If you want the backend code, download my other repository called portfoliotech-backend.

That repository does not include the .env file, so you must create it yourself.
Your .env file should contain:
RESEND_API_KEY=your_resend_api_key

EMAIL_TO=your_email@example.com

PORT=5000

Generate your own Resend API key and replace the placeholder above.

After that:

Place the backend folder inside the root folder of this project.

In the root folder of the frontend project, create a file named .env.local with the following content:
VITE_API_URL=http://localhost:5000

This will allow the frontend to communicate with your local backend.

Step 1 — Start the Backend
Open a new terminal, then run:
cd backend
npm install
node server.js

Step 2 — Start the Frontend
Open another terminal (keep backend running), then run:
npm install
npm run dev

## 🛠 Technologies Used

- **React**: JavaScript library for building the user interface.
- **TypeScript**: A superset of JavaScript that adds type safety and improves code quality.
- **Tailwind CSS**: A utility-first CSS framework to rapidly build custom designs.
- **Lucide Icons**: Used for interactive and sleek icons.
- **Vercel**: For fast deployment and hosting.
- **GitHub API**: To fetch and display repositories.
- **Hashnode API**: To fetch and display latest blogs.
- **Framer-Motion**: For svg signature loading animation.

---

## 📸 Screenshots

Here’s a glimpse of the portfolio:

![Home Screenshot](./public/assets/portfolio.png)

---

## 📜 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## 📬 Contact

Feel free to reach out to me through any of the following channels:

- **Email**: [adityarauniyar.tech@gmail.com](mailto:adityarauniyar.tech@gmail.com)
- **LinkedIn**: [linkedin.com/in/aditya-rauniyar-762618297](https://linkedin.com/in/aditya-rauniyar-762618297)
- **Website**: [adityarauniyar-tech.vercel.app](https://adityarauniyar-tech.vercel.app)

---

### 🔥 Made with ❤️ by **Aditya Rauniyar**
