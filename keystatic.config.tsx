import { collection, config, fields } from '@keystatic/core'
export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'thinkmill',
      name: 'keystatic-template-astro',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      directory: 'src/content/posts/',
      getItemSlug: (data) => data.slug,
      schema: {
        title: fields.text({
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
        summary: fields.text({
          label: 'Summary',
          validation: { length: { min: 4, max: 120 } },
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
