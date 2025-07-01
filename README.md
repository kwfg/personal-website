[![Netlify Status](https://api.netlify.com/api/v1/badges/6c639eea-40e5-40c3-8200-4ca5f1ea5ef9/deploy-status)](https://app.netlify.com/projects/darling-starlight-9ecea6/deploys)

# Personal Website

A clean and responsive personal portfolio website built with **React** and **Vite**.  
This site showcases my projects, skills, and background in web development.

![screenshot_2025-06-24 095138](https://github.com/user-attachments/assets/0cece151-07a4-4eac-a86b-4a1c72c1dd73)

>  Live Demo: [https://garykw.com](https://garykw.com)

---

## Features

- Responsive design for desktop & mobile
- Project data-driven via `data.jsx`
- Styled with custom CSS
- Blog or Markdown support for posts
- Images hosted locally for faster load

## Deployment

This site is deployed to production using:

- **Netlify** – Handles build, hosting, HTTPS, and continuous deployment
- **Cloudflare** – Manages DNS and provides CDN + security enhancements

---

## Folder Structure
```bash
personal-website/
├── public/
│ ├── images/ # All project & blog images
│ └── googlexxxx.html # Google site verification
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Pages (Home, About, Blog, etc.)
│ ├── markdown/ # Markdown articles (if any)
│ └── data.jsx # Project/blog metadata
├── index.html
├── vite.config.js
└── package.json
```


---

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS
- **Markdown Support**: `react-markdown`, `remark-gfm`, `react-syntax-highlighter`
- **Deployment**: Vercel / Netlify

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/kwfg/personal-website.git
cd personal-website

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

