export default function ({ $axios, redirect,env }) {
    $axios.setHeader('X-Auth-Token', env.YUQUE_TOKEN)
  }
