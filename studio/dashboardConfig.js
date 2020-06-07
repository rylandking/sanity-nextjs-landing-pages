export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edcfdc705042b9eca8e1c30',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7myrnnow',
                  apiId: '83910c2a-1e60-4eb4-8df6-7f2ebbe3eef5'
                },
                {
                  buildHookId: '5edcfdc7f7ef3ae7efa7e28f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p9dmo1a6',
                  apiId: 'a10f4ff6-55d5-4fc9-bbd2-80188d6bd5eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rylandking/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p9dmo1a6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
