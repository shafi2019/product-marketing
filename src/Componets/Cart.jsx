import React, { useState } from 'react'
import { Badge, Drawer } from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"

function Cart() {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
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
            >             
            </Drawer>
        </div>
    )
}

export default Cart;