import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import config from './owner.config'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.css.network/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.css.network/css?family=Lora|Noto+Serif+SC'
            }
        ]
    },

    env: {
        YUQUE_USER_ID: config.yuque.userId,
        YUQUE_REPO_ID: config.yuque.repoId,
        YUQUE_REPO_SLUG: config.yuque.repoSlug
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: ['~/assets/style/app.styl'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/vuetify', '@/plugins/axios','@/plugins/day'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        proxy: true
    },

    proxy: {
        '/yuque/': {
            target: 'https://www.yuque.com/api/',
            pathRewrite: { '^/yuque/': '' }
        }
    },

    /*
     ** Build configuration
     */
    build: {
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
