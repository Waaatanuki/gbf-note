import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Granblue Note',
  description: '碧蓝笔记',
  base: '/gbf-note/',
  head: [
    ['link', { rel: 'icon', href: '/gbf-note/favicon.ico' }],
  ],
  vite: {
    plugins: [
      Unocss({
        inspector: false,
      }),
    ],
  },
  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '关于', link: '/about' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/gbf-note' },
    ],
    lastUpdated: {
      text: '最后更新于 ',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
})
