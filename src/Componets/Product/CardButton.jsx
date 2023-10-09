import React from 'react'
import { Button, message } from 'antd'
import { addToCart } from '../../API/Api'

function CardButton({ item }) {
    const addProductToCart = () => {
        addToCart(item.id).then(res => {
            message.success(`${item.title} has been added to the Cart`)
        })
    }
    return (
        <Button
            type="link"
            onClick={() => {
                addProductToCart();
            }}>
                    Add to cart
        </Button >
  )
            }

export default CardButton