import React from 'react'
import Card from './Card'


function Product() {
    let products=[
        {
            id:1,
            phone:'Mobile',
            price:'Rs 40,000',
            image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144763'
        },
        {
            id:2,
            phone:'Laptop',
            price:'Rs 78,000',
            image:'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,0&resMode=sharp2&size=3337,2417'
        },
        {
            id:3,
            phone:'Headphones',
            price:'Rs 22,000',
            image:'https://m.media-amazon.com/images/I/81cJ1kUT1LL._AC_SS450_.jpg'
        },
        {
            id:4,
            phone:'Tv',
            price:'Rs 35,000',
            // image:'https://www.lg.com/ph/images/tvs/md05272655/gallery/medium1.jpg',
            image:'https://5.imimg.com/data5/UG/FP/YE/SELLER-47616313/55-inch-full-hd-4k-ready-led-tv-500x500.jpeg',
        },
        {
            id:5,
            phone:'Smart watch',
            price:'Rs 10,000',
            image:'https://m.media-amazon.com/images/I/51YKI3VpPRL._SX466_.jpg'
        },
        {
            id:6,
            phone:'Camera',
            price:'Rs 2000',
            image:'https://images-na.ssl-images-amazon.com/images/I/71HsUZkuyyL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
        },
    ]
  return (
    <>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-lg-12">
                <div className="row ">
                {
                    products.map(prod=>{
                      return <Card data={prod}></Card>
                    })
                }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product