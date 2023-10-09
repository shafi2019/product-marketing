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
                            <Card.Meta
                                title={
                                    <Typography.Paragraph>
                                        Price: ${product.price}{"  "}
                                        <Typography.Text delete type="danger">
                                            $
                                            {parseFloat(
                                                product.price +
                                                (product.price * product.discountPercentage) / 100
                                            ).toFixed(2)}
                                        </Typography.Text>
                                    </Typography.Paragraph>
                                }
                                description={
                                    <Typography.Paragraph
                                        ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                                    >
                                        {product.description}
                                    </Typography.Paragraph>
                                }
                            ></Card.Meta>
                        </Card>
                    )
                }}
                dataSource={items}></List>
        </div>
    )
}

export default Products