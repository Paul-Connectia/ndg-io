# Deployment Guide - NextDoc Labs

## Prerequisites

- Node.js 18+
- Git access to repository
- Access to hosting platform (Vercel, Netlify, or custom)
- Environment variables configured

## Deployment Options

### Option 1: Lovable Platform (Current)

1. Go to [Lovable Project](https://lovable.dev/projects/03eb803c-7d13-4f8e-bd91-10ef07fd6d90)
2. Click **Publish** button (top right)
3. Configure custom domain if needed
4. Deploy

**Pros**: Zero config, instant deploys, preview URLs
**Cons**: Vendor lock-in, limited control

### Option 2: Vercel (Recommended for Production)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Environment Variables in Vercel**:
1. Go to Project Settings → Environment Variables
2. Add all variables from `.env.example`
3. Redeploy

### Option 3: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Build settings**:
- Build command: `npm run build`
- Publish directory: `dist`

### Option 4: Self-Hosted (AWS, DigitalOcean, etc.)

#### Using Docker (Recommended)

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Create `nginx.conf`:
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. Build and run:
```bash
docker build -t nextdoc-labs .
docker run -p 80:80 nextdoc-labs
```

## CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_GA_ID: ${{ secrets.VITE_GA_ID }}
          VITE_META_PIXEL_ID: ${{ secrets.VITE_META_PIXEL_ID }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Custom Domain Setup

### DNS Configuration
Add these records to your DNS provider:

```
Type    Name    Value
A       @       76.76.21.21 (or hosting IP)
CNAME   www     nextdoclabs.com
```

### SSL Certificate
- **Vercel/Netlify**: Automatic Let's Encrypt SSL
- **Self-hosted**: Use Certbot for Let's Encrypt
  ```bash
  certbot --nginx -d nextdoclabs.com -d www.nextdoclabs.com
  ```

## Performance Optimization

### Build Optimization
- Code splitting: Already enabled via Vite
- Tree shaking: Automatic
- Minification: Enabled in production builds

### CDN Configuration
- Use Cloudflare or AWS CloudFront
- Cache static assets aggressively
- Enable Brotli compression

### Monitoring

**Recommended tools**:
- **Performance**: Vercel Analytics, Google Analytics 4
- **Errors**: Sentry (`npm i @sentry/react`)
- **Uptime**: UptimeRobot, Pingdom

## Rollback Procedure

### Vercel/Netlify
1. Go to project dashboard
2. Select previous deployment
3. Click "Promote to Production"

### Docker
```bash
docker tag nextdoc-labs:latest nextdoc-labs:backup
docker pull nextdoc-labs:previous-tag
docker run -p 80:80 nextdoc-labs:previous-tag
```

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works across all routes
- [ ] Forms submit properly (or show correct mock behavior)
- [ ] Images load from CDN
- [ ] Analytics tracking works
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags render correctly
- [ ] SSL certificate valid
- [ ] Performance score >90 (Lighthouse)
- [ ] Accessibility score 100 (Lighthouse)
