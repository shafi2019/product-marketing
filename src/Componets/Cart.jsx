import React, { useEffect, useState } from 'react'
import { Badge, Drawer, InputNumber, Table } from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"
import { getCart } from '../API/Api';

function Cart() {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
     getCart().then(res => {
      setCartItems(res.products)
     })
    }, [])
    return (
        <div>
            <Badge
                onClick={() => {
                    setCartDrawerOpen(true)
                }}
                count="7"
                className="shoppingCartIcon">
                <ShoppingCartOutlined /> 
            </Badge>
            <Drawer
                open={cartDrawerOpen}
                onClose={() => {
                    setCartDrawerOpen(false)
                }}
                title='Your Cart'
                contentWrapperStyle={{width:  600}}
            >
             <Table columns={[
                    {
                        title: 'Title',
                        dataIndex: 'title'
                    },
                    {
                        title: 'Price',
                        dataIndex: 'price',
                        render: (value) => {
                            return <InputNumber defaultValue={value}></InputNumber>;
                        },
                    },
                    {
                        title: 'Quantity',
                        dataIndex: 'quantity'
                    },
                    {
                        title: 'Total',
                        dataIndex: 'total',
                        render: (value) => {
                            return <span>${value}</span>;
                        }
                    }
                ]}
                dataSource={cartItems}
                summary={(data) => {
                    const total = data.reduce((pre, current) => {
                        return pre=current.total
                    }, 0)
                    return <span>Total: {total}</span>
                }}
            />
            
            </Drawer>
        </div>
    )
}

export default Cart;