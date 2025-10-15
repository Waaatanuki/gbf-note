import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Granblue Note',
  description: '碧蓝笔记',
  base: '/gbf-note/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/gbf-note/favicon.ico' }],
  ],
  vite: {
    plugins: [
      Unocss({
        inspector: false,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
        dirs: ['composables'],
        vueTemplate: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'types/components.d.ts',
        dirs: ['components'],
      }),
    ],
    ssr: { noExternal: ['element-plus'] },
  },
  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '关于', link: '/begin/about' },
          { text: '游戏信息', link: '/begin/learn' },
        ],
      },
      {
        text: '实战构筑',
        items: [
          { text: '常用', link: '/build/common' },
          { text: '天上征伐', link: '/build/tenjou' },
          { text: '天元', link: '/build/tengen' },
          { text: '极法', link: '/build/rushizero' },
          { text: '极妈', link: '/build/versusia' },
        ],
      },
      {
        text: '统计数据',
        items: [
          { text: '神仙杯', link: '/stats/shenxian' },
          { text: '古战场', link: '/stats/guildwar' },
          { text: '掉落分析', link: '/stats/drop' },
          { text: '旅行', link: '/stats/trip' },
        ],
      },
      {
        text: '工具',
        items: [
          { text: '新增角色', link: '/tool/npc' },
          { text: '角色动画', link: '/tool/animation' },
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
