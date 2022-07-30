import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      trailingSlash: 'always',
      precompress: true,
    }),
    paths: {
      base: dev ? '' : '/SPA-build-not-adding-repo-name',
    },
  },
  preprocess: preprocess(),
};

export default config;
