# Strapi plugin audit log

[Plugin is inspired by this article](https://medium.com/@adenleabbey/audit-log-trail-with-strapi-74f6bdf70daf)

## installation
```
yarn strapi install audit-log
```

## setup


You have to enable plugin in your middleware config

```js
// config/middleware.js
module.exports = {
  settings: {
    pluginAuditLogTrails: {
      enabled: true
    },
  },
}
```

## development 

### setup new custom strapi instance

[official docs](https://strapi.io/documentation/3.0.0-beta.x/installation/cli.html)
```sh
yarn create strapi-app audit-log-plugin-test --quickstart

cd audit-log-plugin-test

# creat sym link for clonned plugin repo:

yarn dev --watch-admin

```

1. Clone repo

2. Create symlink for custom `strapi-plugin-audit-log`

```sh
# MacOS
ln -s {{ROOT_PATH}}/strapi-plugin-audit-log {{ROOT_PATH}}/audit-log-plugin-test/plugins/audit-log

```

```bat
rem Windows
New-Item -ItemType SymbolicLink -Name .\examples\getstarted\plugins\menu -Target .\packages\strapi-plugin-menu\
```

3. Code installation/setup

```sh
# cd {{ROOT_PATH}}/

# cd {{ROOT_PATH}}/examples/getstarted
yarn build
yarn dev # its alias for `yarn develop --watch-admin`

# open URLs:
> http://localhost:8000/admin
> http://127.0.0.1:1337/documentation/v1.0.0
> http://localhost:1337/graphql
```

### windows troubleshooting

set `HOST` env variable for `localhost`

`HOST=127.0.0.0`
