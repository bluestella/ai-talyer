import React from 'react'

export function Container(props: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">{props.children}</div>
}

