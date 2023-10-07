import React from 'react'
import { HomeFilled } from "@ant-design/icons"
import { Menu } from "antd"

const Navigation = () => {
  return (
    <div className='navigation'>
      <Menu items={[
        
        {
          label: <HomeFilled />,
          key: 'home',
        },
        {
          label: 'Men',
          key: 'men',
          children: [
            {
              label: "Men's Shirts",
              key: "mens-shirts",
            },
            {
              label: "Men's Shoes",
              key: "mens-shoes",
            },
            {
              label: "Men's Watches",
              key: "mens-watches",
            },
          ]
        },
        {
          label: 'Women',
          key: 'women',
          children: [
            {
              label: "Men's Shirts",
              key: "mens-shirts",
            },
            {
              label: "Men's Shoes",
              key: "mens-shoes",
            },
            {
              label: "Men's Watches",
              key: "mens-watches",
            },
          ]
        },
        {
          label: 'Accessories',
          key: 'accessories',
          children: [
            {
              label: "Men's Shirts",
              key: "mens-shirts",
            },
            {
              label: "Men's Shoes",
              key: "mens-shoes",
            },
            {
              label: "Men's Watches",
              key: "mens-watches",
            },
          ]
        },
      ]} />
    </div>
  )
}

export default Navigation