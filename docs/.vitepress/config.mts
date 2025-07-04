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
      {
        text: '实战构筑',
        items: [
          { text: '天元', link: '/build/tengen' },
          { text: '极法', link: '/build/rushizero' },
        ],
      },
      {
        text: '统计数据',
        items: [
          { text: '四象降临', link: '/stats/sixiang' },
          { text: '古战场', link: '/stats/guildwar' },
        ],
      },
      {
        text: '开发运维',
        items: [
          {
            text: '服务器',
            items: [
              { text: 'docker', link: '/devops/server/docker' },
              { text: 'prisma', link: '/devops/server/prisma' },
              { text: 'mysql', link: '/devops/server/mysql' },
              { text: 'mongo', link: '/devops/server/mongo' },
              { text: 'redis', link: '/devops/server/redis' },
            ],
          },
          {
            text: '客户端',
            items: [
              { text: '激活码', link: '/devops/client/code' },
            ],
          },
          {
            text: '开发',
            items: [
              { text: 'WSL', link: '/devops/dev/wsl' },
              { text: 'Ubuntu', link: '/devops/dev/ubuntu' },
            ],
          },
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
