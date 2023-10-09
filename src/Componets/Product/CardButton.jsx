import React, { useState } from 'react'
import { Button, message } from 'antd'
import { addToCart } from '../../API/Api'

function CardButton({ item }) {
    const [loading, setLoading] = useState(false)
    const addProductToCart = () => {
        setLoading(true)
        addToCart(item.id).then(res => {
            message.success(`${item.title} has been added to the Cart`)
            setLoading(false)
        })
    }
    return (
        <Button
            type="link"
            onClick={() => {
                addProductToCart();
            }}
            loading={loading}
        >
            Add to cart
        </Button >
    )
}

export default CardButton