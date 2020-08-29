module.exports = {
    title: 'HMZ - BLOG',
    description: 'Welcome to HMZ Blog',
    base: '/hmzblog/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: 'http://106.52.168.22/#/home' },
          { text: 'Galleries', link: 'http://106.52.168.22/#/gallery/pic' },
          { text: 'About Me', link: 'http://106.52.168.22/#/resume' },
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