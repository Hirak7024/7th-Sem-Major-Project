import React from 'react';
import "./carouselProduct.scss";


export default function CarouselProduct({offer, product, productImg}) {
    return (
        <>
            <div className="carouselProduct-container">
                <div className="left">
                    <h1>SALES</h1>
                    <div className='offer'>
                        <h2>Upto {offer}% Off</h2>
                        <h3>Best Selling {product}</h3>
                    </div>
                    <button>Shop Now</button>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={productImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
