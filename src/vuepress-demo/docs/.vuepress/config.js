module.exports = {
    title: 'HMZ - BLOG',
    description: 'Welcome to HMZ Blog',
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
          { text: 'Home', link: '/' },
          { text: 'Galleries', link: '/#/gallery/pic' },
          { text: 'About Me', link: '/#/resume' },
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