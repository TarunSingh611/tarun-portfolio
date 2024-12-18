export async function GET() {
  const baseUrl = 'https://tarunsinghrajput.netlify.app'; // Replace with your actual domain

  // Fetch portfolio data
  const portfolioData = await fetch('https://tarunsingh611.github.io/CDN-oneServer/portfolio.json')
    .then((res) => res.json())
    .catch(() => null);

  const pages = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/projects', priority: 0.8, changefreq: 'monthly' },
  ];

  // Generate project URLs from API data
  const projects = portfolioData?.projects || [];
  const projectUrls = projects.map((project) => ({
    path: `/projects/${encodeURIComponent(
      project.title.toLowerCase().replace(/\s+/g, '-')
    )}`,
    priority: 0.6,
    changefreq: 'monthly',
  }));

  const allUrls = [...pages, ...projectUrls];

  // Generate XML for sitemap
  const sitemap = allUrls
    .map(({ path, priority, changefreq }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <priority>${priority}</priority>
        <changefreq>${changefreq}</changefreq>
      </url>
    `)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <priority>1.0</priority>
        <changefreq>weekly</changefreq>
        <lastmod>${new Date().toISOString()}</lastmod>
        <meta>
          <title>Tarun Singh - Software Developer</title>
          <description>
            I'm Tarun Singh, a results-driven software developer with expertise in frontend technologies 
            like Next.js and backend solutions. Explore my portfolio for projects, experiences, and skills.
          </description>
        </meta>
      </url>
      ${sitemap}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
