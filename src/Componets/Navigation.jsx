import React from 'react'
import { Menu } from "antd"

const Navigation = () =>{
  return (
    <div className='navigation'>
      <Menu  items={[{
        label: 'Home',
        key: 'home'
      }]}/>
    </div>
  )
}

export default Navigation