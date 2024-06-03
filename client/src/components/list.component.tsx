// list component
import React from 'react'

const List = ({children}: { children: React.ReactNode }) => {
  return (
      <ul className="space-y-4">
        {children}
      </ul>
  )
}

const ListItem = ({children}: { children: React.ReactNode }) => {
  return (
      <li className="p-2 bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {children}
      </li>
  )
}

export {
  List,
  ListItem
}