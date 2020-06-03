import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    previousJobs: [
      {
        image: 'pik.svg',
        href: 'https://pik-broker.ru/',
        title: 'Pik-broker',
        period: '02.2020 — 06.2020',
        text: 'Development one of the company’s sites. Layout of reusable components using <b>SASS</b>. Writing scripts on native <b>JavaScript</b> and <b>JQuery</b>'
      },
      {
        image: 'unicom24.svg',
        href: 'https://unicom24.ru/',
        title: 'Unicom24',
        period: '07.2017 — 12.2019',
        text: 'Development and support of applications and landing pages of the financial market, Scripting on <b>Backbone</b> and <b>AngularJS</b> further on mainly in <b>Vue</b> and <b>Nuxt</b>. Support for the legacy code, refactoring applications, development of designer <b>UI-kit</b> for all company services'
      },
      {
        image: 'kineu.png',
        href: 'https://kineu.kz/',
        title: 'KEEU University',
        period: '10.2013 — 06.2017',
        text: 'Development and support of university sites and landing pages, mainly on platform <b>Wordpress</b>. Scripting on <b>JQuery</b> and <b>PHP</b>. Interaction with social networks and preparation of materials for publication. There were about ten sites under management'
      }
    ],
    skills: [
      'HTML',
      'CSS',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Backbone',
      'Underscore',
      'Lodash',
      'AngularJS',
      'Firebase',
      'Vue',
      'Vuex',
      'Nuxt',
      'Angular',
      'TypeScript',
      'Bootstrap',
      'Bulma',
      'Node',
      'Express',
      'REST',
      'API',
      'JWT',
      'Sequelize',
      'MySQL',
      'Handlebars',
      'Twig',
      'MJML',
      'Git',
      'Github',
      'Bitbucket',
      'React',
      'Redux',
      'React Native',
      'Expo',
      'Genymotion',
      'Gulp',
      'Webpack',
      'Docker'
    ],
    wip: [
      {
        href: '#',
        title: 'delivery',
        text: [
          'This is a startup selling boxes. For him, it is written by the application using <b>React Native</b>. The application allows you to log in and register, activate and link delivery boxes and manage them',
        ],
        status: 'wip'
      },
      {
        href: '#',
        title: 'katomoto',
        text: [
          'Project for managing a motorcycle parts catalog with a lot of settings. Written in <b>Angular 8</b> using <b>Bootstrap 4</b>, it is an application with authorization and downloading, editing and searching directories, communicates with the backend service on a third-party hosting',
          'Has a private repository, write to me if you want to access it'
        ],
        status: 'wip'
      },
      {
        href: '#',
        title: 'sequelize',
        text: [
          'My personal project for studying <b>Node</b>. I use <b>Express</b>, <b>Sequelize</b> and the database <b>MySQL</b>. The project allows you to flexibly work with databases, migrations, seeds are used. It is an administrative panel for managing users, categories and posts',
          'Has a private repository, write to me if you want to access it'
        ],
        status: 'wip'
      }
    ],
    published: [
      {
        href: 'http://nv-clinic.ru/',
        title: 'nv-clinic',
        text: [
          'A multi-page website for a clinic located in Moscow, written in <b>VueJS</b>, used by <b>Vuex</b>, responsive layout design from <b>Figma</b>, contains a lot of information and communicates with the backend server on another hosting',
          'Has a private repository, write to me if you want to access it'
        ],
        status: 'maintenance'
      },
      {
        href: 'https://new.letmeprint.me/',
        title: 'letmeprint',
        text: [
          'An average site for a print publisher, written in <b>VueJS</b> using <b>Vuex</b>, a responsive layout design from <b>Figma</b>, contains feedback forms and a calculator, communicates with the backend server on another hosting',
          'Has a private repository, write to me if you want to access it'
        ],
        status: 'maintenance'
      },
      {
        href: 'https://publishme.ru/',
        title: 'publishme',
        text: [
          'Landing page for a print publisher, written in <b>VueJS</b> using <b>Vuex</b>, a responsive layout design from <b>Figma</b>, contains several feedback forms and many <b>animations</b>, communicates with the backend server on another hosting',
          'Also have a double site with minor changes <a target="_blank" href="https://publishmepod.ru/">publishmepod</a>',
          'Both sites also have repositories, write to me if you want to access it'
        ],
        status: 'maintenance'
      },
      {
        href: 'https://deprecated1.webspace.kz/',
        title: 'aptech',
        text: [
          'Landing page for an educational center in Kazakhstan, written in <b>JQuery</b> using <b>Bootstrap 3</b>, adaptive design, contains standard elements of a set of landing pages',
          'As a backend handler, a couple of scripts were written on <b>PHP</b> to send mail'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://deprecated2.webspace.kz/',
        title: 'kineu',
        text: [
          'Landing page for a university admissions program in Kazakhstan, written in <b>JQuery</b> using <b>Bootstrap 3</b>, adaptive design, contains standard elements of a set of landing pages',
          'As a backend handler, a couple of scripts were written on <b>PHP</b> to send mail'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://test0.webspace.kz/',
        title: 'unicom',
        text: [
          'Test task for employment in <a target="_blank" href="https://unicom24.ru/">unicom24</a>, written in <b>AngularJS</b> using <b>Bootstrap 4</b> and <b>Firebase</b>. It is a one-page application with a list of goods and a shopping cart',
          'Has a public <a target="_blank" href="https://bitbucket.org/denix23x/unicom-test/src/master/">repository</a>'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://wp-template.webspace.kz/',
        title: 'wordpress',
        text: [
          'University website template for <b>Wordpress</b>, made up with <b>Bootstrap 4</b>, contains areas for displaying menus, categories and news from CMS'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://deprecated3.webspace.kz/',
        title: 'webspace',
        text: [
          'First independent project on the first framework, originally intended as a show case with a commercial offer',
          'Dozens of pluins were used on this site, including <b>AngularJS</b> and <b>JQuery</b>, the site is highlighted by fast loading because lazy loading of modules was used',
          'Has a public <a target="_blank" href="https://bitbucket.org/denix23x/ws-repository/src/master/">repository</a>'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://test1.webspace.kz/',
        title: 'g1sw',
        text: [
          'Test task for employment in <a target="_blank" href="https://job.g1sw.com/">g1sw</a>, written in <b>Vue</b> using <b>Vuex</b>. This is a one-page application with a list of cards and the ability to delete and add new ones, data is stored in local storage',
          'Has a public <a target="_blank" href="https://github.com/denis23x/vue-test-2-dashboard">repository</a>'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://test2.webspace.kz/',
        title: 'books',
        text: [
          'I don’t remember the test task for what, written in <b>Vue</b>, is a one-page application and uses <b>API</b> of a third-party service, from an interesting lazy loading of the list of books when scrolling the page',
          'Has a public <a target="_blank" href="https://github.com/denis23x/vue-test-1-books">repository</a>'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://test3.webspace.kz/',
        title: 'models',
        text: [
          'Another test task that I don’t remember written on <b>Angular 7</b> contains 2 tasks at once, the first is a list of models, with a detailed page and the ability to delete and add, the second is a layout with display grid',
          'Has a public <a target="_blank" href="https://github.com/denis23x/angular7-test">repository</a>'
        ],
        status: 'deprecated'
      },
      {
        href: 'https://test4.webspace.kz/',
        title: 'intravision',
        text: [
          'Test task for employment in <a target="_blank" href="http://intravision.ru/">intravision</a>, written in <b>Angular 8</b>. This is a multi-page application with the ability to add and edit applications, made according to the layouts from the technical specifications',
          'Has a public <a target="_blank" href="https://github.com/denis23x/angular8-test">repository</a>'
        ],
        status: 'deprecated'
      }
    ],
  }
})
