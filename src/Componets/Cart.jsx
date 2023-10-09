import React from 'react'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from "@ant-design/icons"

function Cart() {
    return (
        <div>
            <Badge count="7" className="shoppingCartIcon">
                <ShoppingCartOutlined />
            </Badge>
        </div>
    )
}

export default Cart;