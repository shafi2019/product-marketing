import React from 'react'
import { HomeFilled } from "@ant-design/icons"
import { Menu } from "antd"

const Navigation = () => {
  return (
    <div className='navigation'>
      <Menu 
      mode="horizontal"
      items={[
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
              label: "Women's Shirts",
              key: "womens-shirts",
            },
            {
              label: "Women's Shoes",
              key: "womens-shoes",
            },
            {
              label: "Women's Watches",
              key: "womens-watches",
            },
            {
              label: "Women's Bags",
              key: "womens-bags",
            },
            {
              label: "Women's Jewllery",
              key: "womens-jewellery",
            }
          ]
        },
        {
          label: 'Accessories',
          key: 'accessories',
        },
      ]} />
    </div>
  )
}

export default Navigation