import React from 'react'
import { NavItem } from './Parts'

const navItems = [
  { name: 'About', route: '/' },
  { name: 'Projects', route: '/projects' },
]

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <div className="text-base font-normal md:text-xl">
        {navItems.map((val) => (
          <NavItem key={val.name} name={val.name} route={val.route} />
        ))}
      </div>
    </div>
  )
}

export default Navbar
