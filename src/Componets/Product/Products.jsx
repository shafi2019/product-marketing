import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllProducts, getProductsByCategory } from '../../API/Api'
import { Card, List, Image, Typography, Rate, Spin } from 'antd'
import CardButton from './CardButton'

const Products = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const param = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsByCategory(param.categoryId).then((res) => {
            setItems(res.products);
            setLoading(false)
        })
    }, [param]);
    if (loading) {
        return <Spin spinning />
    }

    return (
        <div>
            <List
                grid={{ column: 4 }}
                renderItem={(product, index) => {
                    return (
                        <Card
                            className='productCard'
                            title={product.title}
                            key={index}
                            cover={
                                <Image className="productImage" src={product.thumbnail} />}
                            actions={[
                                <Rate allowHalf disabled value={product.rating} />, 
                                <CardButton item={product}/>
                            ]}
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