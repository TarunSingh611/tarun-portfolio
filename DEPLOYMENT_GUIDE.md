# Deployment Guide - Modern Build Environment

## Overview
This guide helps you deploy your portfolio using modern build environments and avoid the deprecated Focal build image.

## Prerequisites
- Node.js 20.18.0 or higher
- npm 10.0.0 or higher
- Git

## Deployment Options

### 1. Vercel (Recommended)

#### Automatic Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and use modern build environment

#### Manual Configuration
The `vercel.json` file is already configured for modern deployment:
- Uses Node.js 20.x runtime
- Optimized build settings
- Security headers configured
- Service worker support

#### Environment Variables (if needed)
```bash
# Add these in Vercel dashboard if required
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. Netlify

#### Automatic Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will use the `netlify.toml` configuration

#### Manual Configuration
The `netlify.toml` file is already configured:
- Node.js 20.18.0 specified
- Build commands configured
- Headers and redirects set up

### 3. GitHub Actions

#### Setup
1. Add repository secrets in GitHub:
   - `VERCEL_TOKEN`
   - `ORG_ID`
   - `PROJECT_ID`

2. The `.github/workflows/deploy.yml` will handle:
   - Modern Node.js environment
   - Automated builds
   - Deployment to Vercel

## Build Environment Specifications

### Node.js Version
- **Minimum**: 20.18.0
- **Recommended**: Latest LTS (20.x)

### Package Manager
- **npm**: 10.0.0 or higher
- **yarn**: 1.22.0 or higher
- **pnpm**: 8.0.0 or higher

### Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## Configuration Files

### `.nvmrc`
Specifies Node.js version for development and deployment.

### `package.json`
- Engine specifications for Node.js and npm versions
- Build scripts configured
- Dependencies optimized

### `next.config.mjs`
- Modern webpack configuration
- Image optimization
- Performance optimizations
- Security headers

## Performance Optimizations

### Build Optimizations
- SWC minification enabled
- CSS optimization
- Package import optimization
- Bundle splitting

### Caching Strategy
- Static assets cached for 1 year
- Service worker for offline support
- CDN-friendly headers

### Security Headers
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## Troubleshooting

### Build Failures
1. Ensure Node.js version matches `.nvmrc`
2. Clear build cache: `rm -rf .next`
3. Reinstall dependencies: `rm -rf node_modules && npm install`

### Deployment Issues
1. Check build logs for errors
2. Verify environment variables
3. Ensure all dependencies are in `package.json`

### Performance Issues
1. Check bundle size with `npm run build`
2. Optimize images using Next.js Image component
3. Enable compression in deployment platform

## Migration from Focal Build Image

### What Changed
- Updated to Node.js 20.x
- Modern build tools and optimizations
- Enhanced security headers
- Improved caching strategy

### Benefits
- Faster builds
- Better security
- Improved performance
- Future-proof deployment

## Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### Netlify Support
- Documentation: https://docs.netlify.com
- Community: https://community.netlify.com

### Next.js Support
- Documentation: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions

## Monitoring

### Performance Monitoring
- Core Web Vitals tracking implemented
- Real user metrics available
- Performance budgets configured

### Error Monitoring
- Build error notifications
- Runtime error tracking
- Performance alerts

## Updates

### Regular Maintenance
1. Update dependencies monthly
2. Monitor security advisories
3. Test builds regularly
4. Update Node.js version as needed

### Automated Updates
- Dependabot configured for security updates
- Automated testing on pull requests
- Deployment previews for changes
