module.exports = {
    title: 'HMZ - BLOG',
    description: 'Welcome to HMZ Blog',
    base: '/hmzblog/',
    head: [
        ['link', {
            rel: 'icon',
            href: `http://www.mingzhao.fun/favicon.png`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: 'http://www.mingzhao.fun', target:'_self', rel:'' },
          { text: 'Gallery', link: 'http://www.mingzhao.fun/#/gallery/pic', target:'_self', rel:'' }
        ],
        sidebarDepth: 2,
        sidebar: [
            {
              title: '项目上线',
              collapsable: false,
              children: ['/blog/']
            }         
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}