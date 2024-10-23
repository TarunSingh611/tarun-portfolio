export async function GET() {
    const baseUrl = 'https://tarunsinghrajput.netlify.app/'; // Replace with your domain
  
    const portfolioData = await fetch('https://tarunsingh611.github.io/CDN-oneServer/portfolio.json')
      .then((res) => res.json())
      .catch(() => null);
  
    const pages = [
      { path: '/', priority: 1.0 },
      { path: '/about', priority: 0.8 },
      { path: '/projects', priority: 0.7 },
      { path: '/skills', priority: 0.6 },
      { path: '/timeline', priority: 0.5 },
      { path: '/contact', priority: 0.5 },
    ];
  
    const projects = portfolioData?.projects || [];
  
    const projectUrls = projects.map((project) => ({
      path: `/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`,
      priority: 0.6,
    }));
  
    const allUrls = [...pages, ...projectUrls];
  
    const sitemap = allUrls
      .map(
        ({ path, priority }) =>
          `<url><loc>${baseUrl}${path}</loc><priority>${priority}</priority></url>`
      )
      .join('');
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemap}
      </urlset>`;
  
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  