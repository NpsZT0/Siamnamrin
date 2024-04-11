export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    html.head.push(`<meta name="title" content="My custom title" />`)
    html.head.push(`<link rel="icon" type="image/svg+xml" href="/logo01.png" />`)
  })
  // You can also intercept the response here.
  nitroApp.hooks.hook('render:response', (response, { event }) => { })
})
