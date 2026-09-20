# Dev Insights Mini Blog

Dev Insights is a small React mini-blog application where developers can share programming tips, insights, and updates.

## Requirements

Before running the project, install:

- Node.js
- npm

You can check that they are installed by running:

```bash
node --version
npm --version
```

## Installation 

Clone the repository and move into the project folder:

```bash
git clone https://github.com/AliceUwase/F1_mini-blog-project.git
cd mini-blog
```

Install the project dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```
Vite will provide a local URL, usually:

```bash
http://localhost:5173
```

## Project Structure

```bash
mini-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Post.tsx
│   │   ├── Post.css
│   │   ├── PostList.tsx
│   │   └── PostList.css
│   ├── hoc/
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── Post.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```