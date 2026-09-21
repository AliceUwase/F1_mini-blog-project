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
Vite will provide a local URL, usually `http://localhost:5173`


## Project Structure

```bash
mini-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Post/
│   │   └── PostList/
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

## My reflection

**1. Component Decision**

  I used functional components throughout this project because they're simple, readable, and work well with modern React features like hooks, where the project used them in HOC to log mount/unmount events unlike class components which doesn't using them.

**2. Styling Decision**

-  External CSS: This technique was used for the overall layout and card styling in the component CSS files (Header.css, Post.css and PostList.ccss)

- Inline styling: This technique was used in the post author/featured label in the JSX to conditionally change the text color and weight based on whether the author was featured.

**3. Optimization and Higher-Order Components**

- **`React.memo`:** The Post component used `React.memo` to avoid unnecessary re-renders when its props have not changed and improve the overall performance.

- **Unique ID key:** Each post uses a unique ID as its React Key in order to track items on the list.
  
```bash
<Post key={post.id} post={post} />
```

- **withLogger:** The Higher-Order Component(**withLogger.tsx**) logs a message in the conosle when a wrapped component is mounted and unmounted.

## Challenge & Reflection

One of the challenges i faced while working on the project was the TypeScript and conditional styling issues while implementing the featured post logic and HOC. I was able to resolve it by checking the props and  using a unique key for each item.

Another challenge i encountered has to be implementing part 4 (Optimization and HOC). This was a challenging and yet interesting concept which i had to learn before i started working on the task. 

## External Packages

The project uses the following external packages:

- React & React DOM, TypeScript, Vite, ESLint

