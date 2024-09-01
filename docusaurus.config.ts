import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as path from "node:path";

const config: Config = {
  title: 'west2-online',
  tagline: '福州大学西二在线工作室',
  favicon: 'img/favicon.ico',
  url: 'https://site.west2.online',
  baseUrl: '/',

  // Github pages 配置
  organizationName: 'west2-online', // Github Organization 名称
  projectName: 'website', // 仓库名称
  deploymentBranch: 'gh-pages', // 部署分支
  trailingSlash: false, // 是否保留尾部斜杠


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化，不过我们只需要中文就行了
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 预设
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: // 编辑路径前缀
            'https://github.com/west2-online/website/tree/main/',
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 插件
  plugins: [
    function aliasPlugin() {
      return {
        name: "alias-plugin",
        configureWebpack(config) {
          return {
            resolve: {
              alias: {
                "@": path.resolve(__dirname, 'src/')
              },
            },
          };
        },
      }
    },
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  // 主题配置
  themeConfig: {
    // 色彩模式
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // 首页置顶的公告栏，尽量一句话结束
    announcementBar: {
      id: 'new_info',
      content:
        '我们发布了工作室成员 2024 开源之夏活动课题申请书！ <a target="_blank" rel="noopener noreferrer" href="https://west2-online.feishu.cn/wiki/XxpXwqtWkiALUwk6ZCqcd6gCnBe">点击查看</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },

    // 导航栏
    navbar: {
      title: 'west2-online',
      logo: {
        alt: 'west2-online logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/member',
          position: 'left',
          label: '成员列表',
        },
        {
          type: 'dropdown',
          label: '培养方案',
          position: 'left',
          items: [
            {
              label: 'AI',
              href: 'https://github.com/west2-online/learn-AI',
            },
            {
              label: 'Android',
              href: 'https://github.com/west2-online/learn-android',
            },
            {
              label: 'frontends',
              href: 'https://github.com/west2-online/learn-frontends',
            },
            {
              label: 'Go',
              href: 'https://github.com/west2-online/learn-go',
            },
            {
              label: 'HarmonyOS',
              href: 'https://github.com/west2-online/learn-HarmonyOS',
            },
            {
              label: 'Java',
              href: 'https://github.com/west2-online/learn-java',
            },
            {
              label: 'Unity',
              href: 'https://github.com/west2-online/learn-unity',
            },
          ],
        },
        {
          type: 'dropdown',
          label: '产品直达',
          position: 'left',
          items: [
            {
              label: '福uu（福大助手）',
              href: 'https://fzuhelper.w2fzu.com/',
            },
            {
              label: '飞跃手册',
              href: 'https://run.west2.online/',
            },
            {
              label: '校园指南',
              href: 'https://fzuwiki.west2.online/',
            },
          ],
        },
        {
          href: 'https://wiki.west2.online',
          label: 'Wiki',
          position: 'right',
        },
        {
          href: 'https://github.com/west2-online',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    // 页脚
    footer: {
      style: 'dark',
      links: [
        {
          html: `
            <div style="display: flex; justify-content: center; align-items: center; color:#FFF;">
              <span>本网站由</span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" style="display: inline-flex; align-items: center;">
                <img src="/img/upyun_logo.svg" alt="又拍云"  height= "20px" style="margin: 0 5px;" />
              </a> 
              <span>提供CDN加速/云存储服务</span>
            </div>
          `
        }
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} west2-online. 网站使用 Docusaurus 构建.<div/> <a href="https://beian.miit.gov.cn/#/Integrated/index">闽ICP备19020557号-3</a> <img src="/img/beian.png" height="14px" width="14px"style="margin: 0 5px;"/>闽公网安备35018302000171号`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
