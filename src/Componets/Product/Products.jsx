import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../API/Api'
import { Card, List, Image, Typography } from 'antd'

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        getAllProducts().then((res) => {
            setItems(res.products)
        })
    }, [setItems])
    console.log('Products from API', items)
    return (
        <div>
            <List
                grid={{ column: 4 }}
                renderItem={(product, index) => {
                    return (
                        <Card
                            title={product.title}
                            key={index}
                            cover={
                                <Image className="productImage" src={product.thumbnail} />}
                        >
                            <Card.Meta title={
                                <Typography.Paragraph>
                                    Price: ${product.price} {"  "}
                                    <Typography.Text>
                                        {product.price +
                                            (product.price * product.discountPercentage / 100)}
                                    </Typography.Text>
                                </Typography.Paragraph>
                            }>
                            </Card.Meta>
                        </Card>
                    )
                }}
                dataSource={items}></List>
        </div>
    )
}

export default Products