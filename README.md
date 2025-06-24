
# Personal Website

A clean and responsive personal portfolio website built with **React** and **Vite**.  
This site showcases my projects, skills, and background in web development.

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

