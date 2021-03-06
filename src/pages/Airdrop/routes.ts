import { RouteRecordRaw } from 'vue-router'
import {
  ROUTE_AIRDROP_CREATE,
  ROUTE_AIRDROP_SUMMARY,
  ROUTE_AIRDROP_DROP,
} from 'src/helpers/enums/routes'
import {
  PAGE_AIRDROP_CREATE,
  PAGE_AIRDROP_SUMMARY,
  PAGE_AIRDROP_DROP,
} from 'src/helpers/enums/pages'


const createRoutes = (): RouteRecordRaw[] => [
  {
    path: '/create',
    name: ROUTE_AIRDROP_CREATE,
    meta: {
      title: PAGE_AIRDROP_CREATE.title,
    },
    component: () => import(
      /* webpackChunkName: "airdrop.create" */
      './PageAirdropCreate.vue'
    ),
  },
  {
    path: '/view/:id',
    name: ROUTE_AIRDROP_SUMMARY,
    props: true,
    meta: {
      title: PAGE_AIRDROP_SUMMARY.title,
    },
    component: () => import(
      /* webpackChunkName: "airdrop.summary" */
      './PageAirdropSummary.vue'
    ),
  },
  {
    path: '/drop/:id',
    name: ROUTE_AIRDROP_DROP,
    props: true,
    meta: {
      title: PAGE_AIRDROP_DROP.title,
    },
    component: () => import(
      /* webpackChunkName: "airdrop.drop" */
      './PageAirdropDrop.vue'
    ),
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createModule = (options: unknown) => {
  const routes = createRoutes()
  return routes
}

export default createModule
