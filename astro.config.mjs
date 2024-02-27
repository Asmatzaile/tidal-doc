import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://tidalcycles.org',
  markdown: {
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append', }],
    ],
  },
  integrations: [
    starlight({
      title: 'TidalCycles',
      customCss: [
        './src/styles/custom.css',
        '@fontsource-variable/inter',
        '@fontsource-variable/fira-code',
      ],
      logo: {
        src: './src/assets/logo.svg'
      },
      social: {
        github: 'https://github.com/tidalcycles/',
        discord: 'https://discord.gg/ugFq7KfGnB',
        twitter: 'https://twitter.com/tidalcycles',
        youtube: 'https://youtube.com/tidalcycles',
        mastodon: 'https://post.lurk.org/@tidalcycles',
        openCollective: 'https://opencollective.com/tidalcycles'
      },
      sidebar: [
        { label: 'Introduction',
          // translations: { 'fr': 'Introduction', },
          items: [
            { label: 'What is Tidal?', link: '/introduction/what-is-tidal', },
            { label: 'The concept', link: '/introduction/concept', },
            { label: 'Showcase', link: '/introduction/showcase', },
            { label: 'Community', link: '/introduction/community', },
            { label: 'Related projects', link: '/introduction/related', },
          ],
        },
        { label: 'Getting started',
          // translations: { 'fr': 'Commencer', },
          items: [
            { label: 'Installation', link: '/getting-started/installation' },
            { label: 'Launching Tidal', link: '/getting-started/launching' },
            { label: 'Making sound', link: '/getting-started/making-sound' },
            { label: '[etc.]', link: '#' },
          ]
        },
        { label: 'Guides',
          // translations: { 'fr': 'Guides', },
          autogenerate: { directory: 'guides' },
        },
        { label: 'Explanation',
          // translations: { 'fr': 'Explication', },
          items: [
            { label: 'Haskell syntax for Tidal', link: '/explanation/syntax' },
            { label: 'The Pattern data type', link: '/explanation/pattern' },
            { label: 'Types and typeclasses', link: '/explanation/types' },
            { label: 'FRP and pattern semantics', link: '/explanation/frp' },
            { label: 'The SuperDirt OSC interface', link: '/explanation/osc' },
          ],
        },
        { label: 'Reference',
          // translations: { 'fr': 'Référence', },
          items: [
            { label: 'Tidal functions',
              autogenerate: { directory: 'reference/functions' }
            },
            { label: 'Configuration',
              items: [
                { label: 'Tidal', link: '/reference/config/tidal' },
                { label: 'SuperDirt', link: '/reference/config/superdirt' }
              ]
            },
            { label: 'Mini-notation',
              autogenerate: { directory: 'mini-notation' }
            },
        ],
          
        },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en'
        }
        // fr: { label: 'French', lang: 'fr', },
      },
      editLink: {
        baseUrl: 'https://github.com/tidalcycles/tidal-doc/edit/main/'
      },
      components: {
        Head: './src/components/Head.astro',
      },
      plugins: [starlightBlog({
        recentPostCount: 20
      })]
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
