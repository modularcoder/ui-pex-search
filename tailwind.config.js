const path = require('path')
const coreConfig = require('@pexeso/ui-core/tailwind.config')

const config = {
  ...coreConfig,
  important: '#app-ui-pex-search',
  content: [
    path.resolve(__dirname, './app.vue'),
    path.resolve(__dirname, './components/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  prefix: 'tw-',
}

module.exports = config
