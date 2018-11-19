module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: '不吃韭菜',
      description: '随便写写'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/profile.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    locales: {
      '/': {
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '学习笔记',
            link: '/note/',
          },
          {
            text: '胡言乱语',
            link: '/balabala/',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/MIA503'
          }
        ],
        sidebar: {
          '/note/': genSidebarConfig('私家菜园', 'RabbitMQ'),
          '/balabala/': genBalaSidebarConfig('随便说说'),
        }
      }
    }
  }
}

function genSidebarConfig (init, mq) {
  return [
    {
      title: init,
      collapsable: false,
      children: [
        ''
      ]
    },
    // {
    //   title: python,
    //   collapsable: false,
    //   children: [
    //     'python/',
    //     'python/getting-started',
    //     'python/assets',
    //     'python/using-vue',
    //     'python/custom-themes',
    //     'python/deploy'
    //   ]
    // },
    {
      title: mq,
      collapsable: false,
      children: [
        'rabbitmq/',
        'rabbitmq/rabbitmq',
        'rabbitmq/celery',
        'rabbitmq/redis_broker'
      ]
    }
  ]
}

function genBalaSidebarConfig (bala) {
  return [
    {
      title: bala,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}

