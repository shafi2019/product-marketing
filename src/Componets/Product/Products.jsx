import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../API/Api'
import { Card, List, Image } from 'antd'

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
                    return <Card title={product.title} key={index} cover={<Image  className="productImage" src={product.thumbnail}/>}></Card>
                }}
                dataSource={items}></List>
        </div>
    )
}

export default Products