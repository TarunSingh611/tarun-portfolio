# Caching Strategy Documentation

## Overview
This document outlines the comprehensive caching strategy implemented across the portfolio project to ensure optimal performance while maintaining data freshness.

## Caching Policy

### API Data - No Caching
All API endpoints and dynamic data are configured with **zero caching** to ensure the most up-to-date information is always served.

**Headers Applied:**
```
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Pragma: no-cache
Expires: 0
Surrogate-Control: no-store
```

**Affected Routes:**
- `/api/portfolio` - Portfolio data API
- `/api/contact` - Contact form submission API
- `/api/sitemap.xml` - Sitemap generation API

### Static Assets - 1 Hour Cache
Static assets like images, fonts, and other resources are cached for a maximum of **1 hour (3600 seconds)** to balance performance with freshness.

**Headers Applied:**
```
Cache-Control: public, max-age=3600, must-revalidate
```

**Affected Assets:**
- `/images/*` - All image files
- `/fonts/*` - All font files
- Static CSS/JS files

## Implementation Details

### 1. API Routes (`src/app/api/`)
All API routes return responses with no-cache headers:

```javascript
return NextResponse.json(data, {
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Surrogate-Control': 'no-store',
    'Content-Type': 'application/json',
  },
});
```

### 2. Fetch Calls (`src/app/page.jsx`)
All fetch calls include no-cache options:

```javascript
const res = await fetch('/api/portfolio', {
  cache: 'no-store',
  next: { revalidate: 0 },
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Surrogate-Control': 'no-store',
  },
});
```

### 3. Next.js Configuration (`next.config.mjs`)
Global headers configuration for different route types:

```javascript
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate, max-age=0' },
        { key: 'Pragma', value: 'no-cache' },
        { key: 'Expires', value: '0' },
        { key: 'Surrogate-Control', value: 'no-store' },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
      ],
    },
  ];
}
```

### 4. Deployment Configuration

#### Vercel (`vercel.json`)
```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate, max-age=0" },
        { "key": "Pragma", "value": "no-cache" },
        { "key": "Expires", "value": "0" },
        { "key": "Surrogate-Control", "value": "no-store" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }
      ]
    }
  ]
}
```

#### Netlify (`netlify.toml`)
```toml
[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "no-cache, no-store, must-revalidate, max-age=0"
    Pragma = "no-cache"
    Expires = "0"
    Surrogate-Control = "no-store"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=3600, must-revalidate"
```

## Benefits

### 1. Data Freshness
- **Instant Updates**: Changes to portfolio data are reflected immediately
- **No Stale Data**: Users always see the most current information
- **Real-time Content**: Dynamic content is always up-to-date

### 2. Performance Optimization
- **Static Asset Caching**: Images and fonts are cached for 1 hour to reduce load times
- **Reduced Server Load**: Static assets don't need to be re-downloaded frequently
- **Better User Experience**: Faster loading for returning visitors

### 3. SEO Benefits
- **Fresh Content**: Search engines always see the latest content
- **Improved Rankings**: Fresh, updated content is favored by search algorithms
- **Accurate Sitemaps**: Sitemap generation uses fresh data

## Cache Invalidation

### Automatic Invalidation
- **API Data**: Automatically invalidated on every request
- **Static Assets**: Automatically invalidated after 1 hour
- **Next.js Build**: Cache is cleared on new deployments

### Manual Invalidation
If manual cache invalidation is needed:

1. **Vercel**: Use the Vercel dashboard to clear cache
2. **Netlify**: Use the Netlify dashboard to clear cache
3. **Browser**: Users can hard refresh (Ctrl+F5) to clear browser cache

## Monitoring

### Cache Headers Verification
To verify cache headers are working correctly:

1. **Browser DevTools**: Check Network tab for response headers
2. **cURL**: Use `curl -I` to check headers
3. **Online Tools**: Use tools like GTmetrix or PageSpeed Insights

### Expected Headers
- **API Routes**: Should show `Cache-Control: no-cache, no-store, must-revalidate, max-age=0`
- **Static Assets**: Should show `Cache-Control: public, max-age=3600, must-revalidate`

## Troubleshooting

### Common Issues

1. **Cached API Responses**
   - Check if headers are properly set in API routes
   - Verify deployment configuration is correct
   - Clear browser cache and test

2. **Static Assets Not Caching**
   - Verify static asset headers in deployment config
   - Check if files are being served from correct paths
   - Ensure no conflicting headers

3. **Mixed Cache Behavior**
   - Check for conflicting cache configurations
   - Verify Next.js headers configuration
   - Review deployment platform settings

### Debug Commands
```bash
# Check API headers
curl -I https://your-domain.com/api/portfolio

# Check static asset headers
curl -I https://your-domain.com/images/profile/Avatar.png

# Check sitemap headers
curl -I https://your-domain.com/sitemap.xml
```

## Future Considerations

### Potential Optimizations
1. **Conditional Caching**: Implement different cache strategies based on content type
2. **Cache Warming**: Pre-warm cache for frequently accessed content
3. **CDN Integration**: Use CDN for better global performance
4. **Cache Analytics**: Monitor cache hit rates and performance metrics

### Maintenance
- Regularly review and update cache strategies
- Monitor performance metrics and user feedback
- Update cache configurations as the application evolves
