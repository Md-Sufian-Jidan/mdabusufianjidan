---
title: "Building Scalable APIs with Node.js and Express"
date: "2025-12-10"
readingTime: "8 min read"
tags: ["Node.js", "Express", "REST API", "Backend"]
excerpt: "Learn how to architect production-ready REST APIs with Node.js using modular routing, middleware patterns, and best practices for scalability."
---

# Building Scalable APIs with Node.js and Express

When I started building backend APIs, I quickly realized that writing code that *works* is very different from writing code that *scales*. In this post, I'll share the architecture patterns I've learned while building production applications.

## Project Structure

A scalable Node.js project separates concerns clearly:

```
src/
  routes/         # Route handlers
  controllers/    # Business logic
  middleware/     # Custom middleware
  models/         # Database models
  utils/          # Helper functions
  config/         # Configuration
```

## Centralized Error Handling

One of the most important patterns is centralized error handling:

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Global error handler middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    status: 'error',
    message
  });
});
```

## Input Validation with Zod

Always validate at the boundaries:

```javascript
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8)
});

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  req.validatedData = result.data;
  next();
};
```

## Key Takeaways

- Structure your project around features, not file types
- Validate all incoming data with Zod or Joi
- Use centralized error handling to avoid repetitive try/catch
- Implement rate limiting and CORS from day one
- Log everything in production

Building scalable APIs is a skill that grows with experience. Start with these patterns and iterate as your application grows.
