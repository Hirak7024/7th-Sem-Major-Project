import React from 'react';
import Laptop from "../../Assests/Laptop2.jpg";
import Smartphone from "../../Assests/Smartphone2.jpg";
import HeadPhone from "../../Assests/Headphone2.jpg";
import Speaker from "../../Assests/Speaker2.jpg";
import "./categories.scss";

export default function Categories() {
    return (
        <>
            <div className="categories-container">
                <h1>Shop By Categories</h1>
                <div className="img-container">
                    <div className="img-container-items">
                        <img src={Laptop} alt="" />
                        <p>Laptops</p>
                    </div>
                    <div className="img-container-items">
                        <img src={Smartphone} alt="" />
                        <p>Smartphones</p>
                    </div>
                    <div className="img-container-items">
                        <img src={HeadPhone} alt="" />
                        <p>Headphones</p>
                    </div>
                    <div className="img-container-items">
                        <img src={Speaker} alt="" />
                        <p>Speaker</p>
                    </div>
                </div>
            </div>
        </>
    )
}
