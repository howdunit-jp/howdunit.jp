import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const githubPagesSite = owner ? `https://${owner}.github.io` : undefined;
const githubPagesBase = owner && repo && repo !== `${owner}.github.io` ? `/${repo}` : undefined;

export default defineConfig({
  site: isGitHubPages ? githubPagesSite : 'https://howdunit.jp',
  base: isGitHubPages ? githubPagesBase : undefined,
  integrations: [sitemap()],
});
