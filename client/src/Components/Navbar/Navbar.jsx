import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./navbar.scss";

export default function Navbar() {
    const [isLogged, setIsLogged] = useState(false);
    const handleClick = () => {
        setIsLogged(!isLogged);
    }
    return (
        <>
            <div className="navbar-container">
                <div className="left">
                    <h1> E Store</h1>
                </div>
                <div className="middle">
                    <div className="searchBox">
                        <input type="text" placeholder='Search' />
                        <AiOutlineSearch className='searchIcon' />
                    </div>
                </div>
                <div className="right">
                    <div className='icons'>
                        <div className='icon'><AiOutlineHeart size={25} /></div>
                        <div className='icon'>
                            <AiOutlineShoppingCart size={25} />
                            <p className='number'>3</p>
                        </div>
                    </div>
                    {!isLogged ?
                        <button className="login" onClick={handleClick}>
                            <BsFillPersonFill size={22} />
                            <p>Login</p>
                        </button> : <button className='login2' onClick={handleClick}>
                            Logout
                        </button>
                    }
                </div>
            </div>
        </>
    )
}
