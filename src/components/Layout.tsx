import '@/styles/styles.css'
import '@/styles/tailwind.css'

import type { JSX } from 'react'

import { Link } from '@/components/Link'

function Sidebar({ children }: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: '20px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: '20px',
          paddingBottom: '50px',
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '900px',
        margin: 'auto'
      }}
    >
      <Sidebar>
        <Link href="/">Welcome</Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  )
}
