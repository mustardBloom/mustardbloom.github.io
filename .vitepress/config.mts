import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Beibei Wang',
  description: 'AI agents, coding agents, LLM evaluation, and benchmark design',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: 'Beibei Wang' }],
    ['meta', { property: 'og:title', content: 'Beibei Wang' }],
    ['meta', { property: 'og:description', content: 'Research on AI agents, coding agents, LLM evaluation, and benchmark design' }],
  ],

  themeConfig: {
    siteTitle: 'Beibei Wang',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Book', link: '/coding-agents/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/about' },
      { text: 'Newsletter', link: '/newsletter' },
    ],

    sidebar: {
      '/coding-agents/': [
        {
          text: 'Harness Engineering of Coding Agents',
          items: [
            { text: 'Overview', link: '/coding-agents/' },
            { text: '1. Introduction', link: '/coding-agents/01-introduction' },
            { text: '2. Architecture', link: '/coding-agents/02-architecture' },
            { text: '3. The Harness Loop', link: '/coding-agents/03-harness-loop' },
            { text: '4. Tool System', link: '/coding-agents/04-tool-system' },
            { text: '5. Context Management', link: '/coding-agents/05-context-management' },
            { text: '6. Evaluation & Benchmarks', link: '/coding-agents/06-evaluation' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mustardbloom' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sylviabeibei' },
    ],

    footer: {
      message: '',
      copyright: '© 2026 Beibei Wang',
    },

    search: {
      provider: 'local',
    },
  },
})
