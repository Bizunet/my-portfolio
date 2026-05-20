# Portfolio — Graphic Designer

A modern React + Tailwind CSS portfolio built with Vite.

## Tech Stack
- **React 19** — UI framework
- **Tailwind CSS 3** — utility-first styling
- **Vite** — fast dev server & bundler
- **EmailJS** — contact form email delivery (no backend)
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

## ⚙️ Email Setup (EmailJS)

So the contact form sends to **bizunehsode@gmail.com**, follow these steps:

1. Sign up free at [emailjs.com](https://emailjs.com)
2. **Add a Service** → choose Gmail → connect your Gmail account
3. **Create a Template** — use these variables:
   ```
   From: {{from_name}} ({{reply_to}})
   Service needed: {{service}}
   Message: {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
   ```

## Deploy to GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

Or push to GitHub and deploy with **Vercel** (recommended — free, instant).

## Customize

- **Your name / bio** → `src/components/About.jsx` and `src/components/Hero.jsx`
- **Contact info** → `src/components/Contact.jsx`
- **Project data** → `src/data/projects.js`
- **Images** → `public/images/`
- **Colors** → `tailwind.config.js`
