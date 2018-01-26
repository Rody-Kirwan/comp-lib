import React from 'react'

// Very simple icon wrapper
export default function Icon(props) {
  let { icon, className='' } = props
  className += ` icon icon-${icon}`

  return (
    <span {...props} className={className}/>
  )
}