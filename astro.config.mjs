import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node'

// The node adapter will allow for local build and preview
const isVercelBuild = process.env.CI || process.env.VERCEL

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: isVercelBuild ? vercel(): node({mode: 'standalone'}),
  integrations: [react()]
});
