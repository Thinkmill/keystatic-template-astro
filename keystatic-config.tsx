import { collection, config, fields } from '@keystatic/core'
export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'thinkmill',
      name: 'keystastro',
    },
  },
  collections: {
    activity: collection({
      label: 'Blog Posts',
      directory: 'content/posts/',
      getItemSlug: (data) => data.slug,
      schema: {
        titlle: fields.text({
          label: 'Title',
          validation: { length: { min: 4 } },
        }),
        slug: fields.text({
          label: 'Slug',
          validation: { length: { min: 4 } },
        }),
        publishedDate: fields.date({
          label: 'Published Date',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2, 1],
          ],
        }),
      },
    }),
  },
})
