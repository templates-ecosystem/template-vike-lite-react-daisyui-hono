import { useMemo } from 'react'
import { usePageContext } from 'vike-lite-react'

export function Link({ href, children }: { href: string, children: string }) {
  const pageContext = usePageContext()
  const isActive = useMemo(() =>
    href === '/' ? pageContext.urlPathname === href : pageContext.urlPathname.startsWith(href),
    [href, pageContext.urlPathname]
  )
  return (
    <a href={href} className={`link ${isActive ? 'is-active' : undefined}`}>
      {children}
    </a>
  )
}
