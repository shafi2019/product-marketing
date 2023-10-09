import React, { useEffect, useState } from 'react'
import { Badge, Button, Drawer, Form, Input, InputNumber, Table} from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"
import { getCart } from '../API/Api';

function Cart() {

    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false)

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
                contentWrapperStyle={{ width: 600 }}
            >
                <Table
                    pagination={false}
                    columns={[
                        {
                            title: 'Title',
                            dataIndex: 'title'
                        },
                        {
                            title: 'Price',
                            dataIndex: 'price',
                            render: (value) => {
                                return <span>${value}</span>;
                            }
                        },
                        {
                            title: 'Quantity',
                            dataIndex: 'quantity',
                            render: (value, record) => {
                                return <InputNumber min={0} defaultValue={value} onChange={(value) => {
                                    setCartItems(pre => pre.map(cart => {
                                        if (record.id === cart.id) {
                                            cart.total = cart.price * value
                                        }
                                        return cart
                                    }))
                                }}></InputNumber>;
                            },
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
                            return pre + current.total;
                        }, 0)
                        return <span>Total: {total}</span>
                    }}
                />
               <Button 
               type="primary"
               onClick={() => {
                setCheckoutDrawerOpen(true)
               }}
               >
                Checkout
            </Button>
            </Drawer>
            <Drawer open={checkoutDrawerOpen} onClose={() => {
                setCheckoutDrawerOpen(false)
            }}
            title="Confirm Your Order"
            >
                <Form>
                    <Form.Item rules={[
                        {
                            required:true,
                            message:'Please enter your full name',
                        }
                    ]} label='Full Name' name='full_name'>
                        <Input placeholder='Enter your full name'/>
                    </Form.Item>
                    <Form.Item rules={[
                        {
                            required:true,
                            message:'Please entea valid email address',
                            type:'email'
                        }
                    ]} label='Email Address' name='email_address'>
                        <Input placeholder='email address'/>
                    </Form.Item>
                    <Form.Item rules={[
                        {
                            required:true,
                            message:'Please enter your address',
                        }
                    ]} label='Home Address' name='home_address'>
                        <Input placeholder='enter your address'/>
                    </Form.Item> 
                    <Button type='primary'>Proceed to payment</Button>
                </Form>

            </Drawer>
        </div>
    )
}

export default Cart;