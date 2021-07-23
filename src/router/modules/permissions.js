import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = {
  auth: true
}

export default {
  path: '/demo/permissions',
  name: 'demo-permissions',
  meta,
  redirect: {
    name: 'demo-permissions-index'
  },
  component: layoutHeaderAside,
  children: [
    {
      path: 'index',
      name: 'demo-permissions-index',
      component: _import('demo/permissions/index'),
      meta: {
        ...meta, title: '权限功能'
      }
    }
  ]
}
