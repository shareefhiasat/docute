const langs = [
  { title: 'English', path: '/home', matchPath: /^\/(home|addEvent|stylingTheming)/ },
  { title: 'العربية', path: '/ar-Jordan/', matchPath: /^\/ar-Jordan/ }
]

docute.init({
  url: '.' ,
  landing: 'landing.html',
  // announcement(route) {
  //   const info = { type: 'success' }
  //   if (/\/zh-.+$/.test(route.path)) {
  //     info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">捐赠!</a> 通过 Patron 或者一次性捐赠支持 Docute 的开发。'
  //   } else {
  //     info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">Donate!</a> Support Docute development by becoming a patron or one-time donation.'
  //   }
  //   return info
  // },
  debug: false,
  disableSidebarToggle: true,
  // home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
  // repo: 'egoist/docute',
  // twitter: '_egoistlily',
  // 'edit-link': 'https://github.com/egoist/docute/blob/master/docs/',

  /*
  * @TODO add later
  * {
        title: 'Add Event', path: '/addEvent'
      }

      {
        title: 'Buying Scenarios', path: '/buyingScenarios'
      }

      ,
      {
        title: 'Scanning Tickets', path: '/scanning'
      }

      ,
    'ar-Jordan': [
      {
        title: 'الصفحة الرئيسية', path: '/ar-Jordan/'
      },
      {
        title: 'أضف فعاليتك', path: '/ar-Jordan/plugins'
      },
      {
        title: 'التخصيص و التلوين', path: '/ar-Jordan/cli'
      },
      {
        title: 'اللغة', type: 'dropdown', items: langs
      }
    ]

      */
  tocVisibleDepth: 4,
  nav: {
    default: [
      {
        title: 'Home', path: '/home'
      },
      {
        title: 'Work In Progress', path: '/toreview'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }
    ]
  },
  plugins: [
    docsearch({
      appId: 'BH4D9OD16A',
      apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
      indexName: 'docute',
      tags: ['english', 'ar-Jordan'],
      url: 'https://v3.docute.org'
    }),
    evanyou()
  ]
})
