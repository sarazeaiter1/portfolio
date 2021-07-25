import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  name: string
  route: string
}

export const NavItem: React.FC<Props> = ({ name, route }) => {
  const { pathname } = useRouter()
  const isAboutActive = name === 'About' && pathname === '/'
  const isCurrentActive = isAboutActive || pathname.includes(name.toLowerCase())
  const classNameForActive = isCurrentActive ? 'underline text-purple-600' : ''
  return (
    <Link href={route}>
      <a>
        <span
          className={`mx-2 cursor-pointer hover:border-b-4 hover:text-purple-600 ${classNameForActive}`}
        >
          {name}
        </span>
      </a>
    </Link>
  )
}

export default NavItem
