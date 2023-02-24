import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node'

const isVercelBuild = process.env.CI

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: isVercelBuild ? vercel(): node({mode: 'standalone'}),
  integrations: [react()]
});
