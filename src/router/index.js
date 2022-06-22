import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/signIn',
    component: () => import('../views/signInView.vue')
  },
  {
    path: '/signUp',
    component: () => import('../views/signUpView.vue')
  },
  {
    path: '/',
    component: () => import('../views/homePage/HomeView.vue'),
    children: [
      {
        path: 'index',
        component: () => import('../views/homePage/IndexView.vue'),
        children: [
          {
            path: 'programs',
            component: () => import('../views/homePage/programs/programsView.vue')
          },
          {
            path: 'searchProgram',
            component: () => import('../views/homePage/programs/searchProgram.vue')
          }
        ]
      },
      {
        path: 'program',
        component: () => import('../views/homePage/programs/programView.vue')
      },
      {
        path: 'copyProgram',
        component: () => import('../views/homePage/programs/copyProgramView.vue')
      },
      {
        path: 'customProgram',
        component: () => import('../views/homePage/programs/customProgramView.vue')
      },
      {
        path: 'editProgram',
        component: () => import('../views/homePage/programs/editProgramView.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/favorite/favoriteView.vue'),
        children: [
          {
            path: 'overview',
            component: () => import('../views/favorite/overviewView.vue')
          },
          {
            path: 'customCollection',
            component: () => import('../views/favorite/customCollectionView.vue')
          }
        ]
      },
      {
        path: 'record',
        component: () => import('../views/record/recordView.vue'),
        children: [
          {
            path: 'operationalProgram',
            component: () => import('../views/record/operationalProgramView.vue')
          },
          {
            path: 'trackRecord',
            component: () => import('../views/record/trackRecordView.vue')
          }
        ]
      },
      {
        path: 'user',
        component: () => import('../views/user/userView.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('../views/user/userSettingView.vue')
          },
          {
            path: 'site',
            component: () => import('../views/user/changeSiteView.vue')
          },
          {
            path: 'createSite',
            component: () => import('../views/user/createSiteView.vue')
          },
          {
            path: 'editSite',
            component: () => import('../views/user/editSiteView.vue')
          },
          {
            path: 'system',
            component: () => import('../views/user/systemSettingView.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
