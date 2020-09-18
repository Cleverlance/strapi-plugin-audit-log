
const removePasswords = (key, value) =>
  key === 'password' ? undefined : value

const denyListUrls = [
  'renew-token',
  '/admin/login'
]

module.exports = (strapi) => {
  return {
    initialize () {
      strapi.app.use(async (ctx, next) => {
        await next()

        const method = ctx.request.method
        console.log(method)
        if (!(method === 'POST' || method === 'PUT' || method === 'DELETE')) {
          return
        }

        console.log(ctx.request.url)
        if (denyListUrls.some((val) => ctx.request.url.includes(val))) {
          return
        }

        if (ctx.state && ctx.state.user) {
          const entry = {
            statusCode: ctx.response.status,
            author: {
              id: ctx.state.user.id,
              email: ctx.state.user.email,
              ip: ctx.request.ip
            },
            method: ctx.request.method,
            route: ctx._matchedRoute,
            params: ctx.params,
            request: ctx.request.body,
            content: ctx.response.body
          }
          if (
            (ctx.params.model && ctx.params.model.includes('trail')) ||
            (ctx.params.uid && ctx.params.uid.includes('trail'))
          ) {
            // Do nothing
          } else {
            // await strapi.query('trails', 'audit-log').create(entry))
            await strapi.query('trails', 'audit-log').create(
              JSON.parse(JSON.stringify(entry, removePasswords))
            )
          }
        }
      })
    }
  }
}
