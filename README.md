# Bhagya Lakshmi — Portfolio

A full-stack portfolio website built with **Next.js 14** (frontend) and **Express.js** (backend).

🔗 **Live**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | Next.js 14, TypeScript, Tailwind CSS, Framer Motion |
| Backend   | Node.js, Express.js, Nodemailer     |
| Hosting   | Vercel (frontend) + Render (backend) |

---

## Project Structure

```
baggii-portfolio/
├── frontend/          # Next.js app
│   ├── app/           # App Router (layout, page, globals.css)
│   ├── components/    # UI components (Hero, About, Skills, etc.)
│   └── public/        # Static assets (avatar.png, resume.pdf)
└── backend/           # Express API
    ├── controllers/   # contactController.js (Nodemailer)
    ├── routes/        # contact.js
    └── server.js
```

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Bhagya-Lakshmi29/bagii-portfolio.git
cd bagii-portfolio
```

### 2. Backend setup

```bash
cd backend
npm install

# Copy the env template and fill in your values
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5001
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

> **Gmail App Password**: Go to [Google Account → Security → App Passwords](https://myaccount.google.com/apppasswords) and generate one for "Mail".

Start the backend:
```bash
npm run dev    # development (nodemon auto-reload)
npm start      # production
```

### 3. Frontend setup

```bash
cd frontend
npm install

# Copy the env template
cp .env.local.example .env.local
```

Edit `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5001
```

Start the frontend:
```bash
npm run dev    # http://localhost:3000
```

---

## Deployment

### Frontend → Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Set the **Root Directory** to `frontend`.
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend.onrender.com`
5. Click **Deploy**.

### Backend → Render

1. Go to [render.com](https://render.com) → **New Web Service** → Connect your repo.
2. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
3. Add environment variables:
   - `PORT` = `5001` (Render overrides this automatically)
   - `FRONTEND_URL` = `https://your-portfolio.vercel.app`
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your Gmail App Password
4. Click **Create Web Service**.

> After both are deployed, update `NEXT_PUBLIC_API_URL` in Vercel to point to your Render backend URL, and redeploy.

---

## After Deployment

Update the following with your real URLs:
- `frontend/public/robots.txt` — replace `your-portfolio.vercel.app`
- `frontend/public/sitemap.xml` — replace `your-portfolio.vercel.app`
- `backend/.env` → `FRONTEND_URL` — your Vercel URL

---

## License

MIT © Perugu Bhagya Lakshmi
