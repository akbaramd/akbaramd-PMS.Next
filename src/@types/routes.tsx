import { TenantMemberRole } from './tenant'
import { LayoutType } from './theme'
import type { LazyExoticComponent, ReactNode } from 'react'

export type PageHeaderProps = {
    title?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
    description?: string | ReactNode
    contained?: boolean
    extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
}

export interface Meta {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    pageBackgroundType?: 'default' | 'plain'
    header?: PageHeaderProps
    footer?: boolean
    layout?: LayoutType
}

export type Route = {
    key: string
    path: string
    component: LazyExoticComponent<<T extends Meta>(props: T) => JSX.Element>
    authority: string[]
    meta?: Meta
    tenantAccess?: TenantMemberRole[]
}

export type Routes = Route[]
