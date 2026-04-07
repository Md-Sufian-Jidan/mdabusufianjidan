---
title: "Authentication with JWT: A Complete Guide"
date: "2026-02-05"
readingTime: "7 min read"
tags: ["Authentication", "JWT", "Security", "Node.js"]
excerpt: "Implement secure authentication in your web apps using JSON Web Tokens, refresh tokens, and best security practices."
---

# Authentication with JWT: A Complete Guide

JWT authentication is one of the most common patterns in modern web apps. Here's how to implement it securely.

## How JWT Works

A JWT consists of three parts:
- **Header**: Algorithm type
- **Payload**: User data (non-sensitive)
- **Signature**: Verification hash

```
eyJhbGc...header.eyJ1c2VySWQi...payload.SflKxw...signature
```

## Generating Tokens

```javascript
import jwt from 'jsonwebtoken';

const generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};
```

## Middleware Verification

```javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

## Security Best Practices

- Use short-lived access tokens (15 minutes)
- Store refresh tokens in httpOnly cookies
- Never store sensitive data in JWT payload
- Implement token rotation on refresh
- Validate all user input before issuing tokens

JWT security is all about following best practices consistently. One mistake can compromise your entire system.
