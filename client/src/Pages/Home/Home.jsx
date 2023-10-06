import React from 'react';
import CarouselProduct from '../../Components/CarouselProduct/CarouselProduct';
import { ProductCarouselData } from "../../ProductsCarousel"
import Carousel from "react-multi-carousel";
import Categories from '../../Components/Categories/Categories';
import "react-multi-carousel/lib/styles.css";
import "./home.scss";

export default function Home() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                {ProductCarouselData.map((item)=>{
                    return(
                        <CarouselProduct offer={item.offer} product={item.productName} productImg={item.productImg} />
                    )
                })}
            </Carousel>;
            <Categories/>
        </>
    )
}
