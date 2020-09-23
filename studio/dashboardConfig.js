export default {
  widgets: [
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
                  buildHookId: '5f6b3b76c9ebb130d76ceb2f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qo93q5uy',
                  apiId: 'f872873e-a7ed-49cf-bc76-55fddc87a32a'
                },
                {
                  buildHookId: '5f6b3b7686dd940470e57d51',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mwenvscr',
                  apiId: 'eb841d92-c9cb-4164-8f31-5cc2f0f8e68b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pranasystems/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mwenvscr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
