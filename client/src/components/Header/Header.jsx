import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart} from "react-icons/cg";
import { AiOutlineHeart} from "react-icons/ai";

import Logo from "../../assets/logo.jpg";

import Dropdown from './Menu/Dropdown/Dropdown'
import DropdownItem from "./Menu/DropdownItem/DropdownItem";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart ] = useState(false);
    const [showSearch, setShowSearch ] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    const items = ["Headphones", "Speakers", "Watches", "Earbuds"];

    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    },[]);

    return (
        <>
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={() => navigate("/")}>Home</li>
                {/* <li>About</li> */}
                <li onClick={()=> navigate("/about")}>About Us</li>
                <li><Dropdown
                    buttonText="category"
                    content={<>
                        {items.map((item,index) => (
                            <DropdownItem key={item} index={index}>
                                <a className="dropdown-item" href={`/category/${index+1}`}>{item}</a>
                            </DropdownItem>
                        ))}
                    </>} />
                </li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>
                MYSTORE 
            </div>
            <div className="right">
                <TbSearch onClick={()=>setShowSearch(true)} aria-placeholder=""/>
                <AiOutlineHeart />
                <span className="cart-icon" onClick={()=>setShowCart(true)}>
                    <CgShoppingCart />
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
    );
};

export default Header;
