import fs from 'fs';
import path from 'path';

async function exportData() {
  const srvModule = await import('./src/data/ophronServicePages.ts');
  const blogModule = await import('./src/data/ophronBlogPosts.ts');
  const clientModule = await import('./src/data/clients.ts');
  const gktModule = await import('./src/data/gktData.ts');

  const data = {
    pillars: srvModule.BUSINESS_PILLARS_DATA,
    catalog: srvModule.ALL_SERVICES_CATALOG,
    servicePages: srvModule.OPHRON_SERVICE_PAGES,
    priorityMap: srvModule.SERVICE_PRIORITY_MAP,
    blogPosts: blogModule.OPHRON_BLOG_POSTS,
    clients: clientModule.VALUABLE_CLIENTS,
    clientSectors: clientModule.CLIENT_SECTORS,
    gktCompany: gktModule.GKT_COMPANY,
    gktServices: gktModule.GKT_SERVICES,
  };

  const outPath = 'C:/Users/SUDARSANA NARAYANAN/.gemini/antigravity-ide/brain/15e45b7f-5ddf-46f4-86b7-913dafc040f9/scratch/website_data.json';
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('Successfully exported website data to:', outPath);
}

exportData().catch(err => {
  console.error('Export error:', err);
  process.exit(1);
});
