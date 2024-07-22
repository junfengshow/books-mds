import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'BOOKS',
    subName: '学习笔记',
    title: '学习笔记',
    logo: '//www.junfengshow.com/static/assets/logo.png',
    nav: [
      { link: '/base3d', title: '3D数学基础', icon: '/base3d.jpeg' },
    ] as any[],
    navType: 'card',
    footer: `© 2018-2024 All Rights Reserved Developed by <a href='https://www.junfengshow.com' target='_blank'>wujunfeng</a>`,
  },
  favicons: ['//www.junfengshow.com/static/favicon.png'],

  history: {
    type: 'browser',
  },
  outputPath: 'books-mds',
  base: '/',
  publicPath: '/',
  copy: [
    {
      from: 'public',
      to: 'books-mds/public',
    },
  ],
  chainWebpack(memo: any) {
    return memo;
  },
});
