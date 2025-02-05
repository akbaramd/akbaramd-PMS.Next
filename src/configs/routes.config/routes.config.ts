import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [{
    key: 'invitations-detail',
    path: '/invitations/detail/:id',
    component: lazy(() => import('@/views/tenant/invitations/Details/InvitationDetailPage')),
    authority: [],
},...authRoute]

export const    protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'invitations',
        path: '/invitations',
        component: lazy(() => import('@/views/tenant/invitations/InvitationPage')),
        authority: ["invitation:read"],
    },
    {
        key: 'members',
        path: '/members',
        component: lazy(() => import('@/views/tenant/members/MembersPage')),
        authority: ["tenant:read"],

    },
    {
        key: 'projects',
        path: '/projects',
        component: lazy(() => import('@/views/projects/ProjectsPage')),
        authority: ["project:read"],

    },
    {
        key: 'projectDetils',
        path: '/projects/:id',
        component: lazy(() => import('@/views/projects/ProjectDetails/ProjectDetails')),
        authority: ["project:read"],

    },
    {
        key: 'projectScrums',
        path: '/projects/:id/sprints',
        component: lazy(() => import('@/views/projects/SprintList/SprintList')),
        authority: ["project:read"],

    },
    {
        key: 'projectBoards',
        path: '/projects/:projectId/sprints/:sprintId/boards',
        component: lazy(() => import('@/views/projects/BoardList/BoardsList')),
        authority: ["project:read"],

    },
    {
        key: 'ScrumBoards',
        path: '/projects/:projectId/sprints/:sprintId/boards/:boardId',
        component: lazy(() => import('@/views/projects/ScrumBoard/ScrumBoard')),
        authority: ["project:read"],

    },
    {
        key: 'roles',
        path: '/roles',
        component: lazy(() => import('@/views/tenant/roles/RolePage')),
        authority: ["role:read"],

    },

      /** Example purpose only, please remove */
      {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() =>
            import('@/views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],

    },
    ...othersRoute,
]
