import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node'

// const isVercelBuild = import.meta.env.CI || import.meta.env.VERCEL

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()]
});
