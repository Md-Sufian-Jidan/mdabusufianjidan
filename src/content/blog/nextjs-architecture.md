---
title: "Next.js App Router Architecture: Best Practices"
date: "2026-03-01"
readingTime: "9 min read"
tags: ["Next.js", "Architecture", "App Router", "TypeScript"]
excerpt: "Design scalable Next.js applications using App Router with Server Components, data fetching patterns, and folder organization."
---

# Next.js App Router Architecture: Best Practices

The Next.js App Router changed how we think about building React applications. Here's how I structure my projects.

## Folder Structure

```
app/
  (marketing)/      # Route group for public pages
    page.tsx
    about/page.tsx
  (dashboard)/      # Route group for authenticated pages
    dashboard/page.tsx
  layout.tsx
  globals.css

components/
  ui/               # shadcn components
  sections/         # Page sections
  shared/           # Reusable components

lib/
  utils.ts
  api.ts

data/               # Static data, types
```

## Server vs Client Components

Default to Server Components. Only add `'use client'` when needed:

```tsx
// Server Component (default) - runs on server
async function ProductList() {
  const products = await db.query('SELECT * FROM products');
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

// Client Component - needed for interactivity
'use client';
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

## Data Fetching Patterns

```tsx
// Parallel data fetching
async function Dashboard() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  return <div>...</div>;
}
```

## Key Takeaways

- Use Server Components by default
- Co-locate data fetching with components
- Use route groups for logical separation
- Implement proper loading and error states
- Leverage Next.js caching strategies

The App Router rewards you for thinking carefully about your data flow from the start.
