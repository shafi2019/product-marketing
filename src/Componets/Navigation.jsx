import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from 'antd/es/typography/Typography'
import { Menu } from "antd"
import { HomeFilled } from "@ant-design/icons"
import Cart from './Cart'



const Navigation = () => {
  const navigate = useNavigate()
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  }
  return (
    <div className='navigation'>
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: '',
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
                label: "Women's Dresses",
                key: "womens-dresses",
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
            label: 'Fragrances',
            key: 'fragrances',
          },
        ]} />
      <Typography.Title>Shafi Store</Typography.Title>
      <Cart />
    </div>
  )
}

export default Navigation