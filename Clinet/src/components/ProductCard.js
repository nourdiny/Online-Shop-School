import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import {useStateContext} from "../context/ContextProvider";

function ProductCard(props) {
    const {cart , setCart} = useStateContext();
    const {product} = props;
    const {name , id , main_image , price } = product;
    const location = useLocation()
    const path = 'http://127.0.0.1:8000/storage/'

    const addCart = (newCart)=>{
        const foundDict = cart.find(dict => dict["id"] === newCart.id);
        if (foundDict) {
        foundDict.Qty += 1;

        } else {
            setCart((prevcart)=> [...prevcart,newCart]);
        }

        
      }

    return ( 
        <div className='col-12  sm:w-[45%] lg:w-[29%] xl:w-[20%] mb-2'>
            <div className='product-card d-flex flex-column'>
                <div className="product-image position-relative">
                    <div className='product-changing'>
                        <img className='img-fluid w-full' src={path + product.main_image}alt="product-img" />
                    </div>
                    <div className="action-bar position-absolute d-flex flex-column gap-10">
                        <div className="d-flex flex-column gap-10">
                            <Link to={'/product/' +product.id+'/'+ product.slug}  className='icon-link'>
                                <img src="/images/view.svg" alt="view-icon" />
                            </Link>
                            <button className='icon-link' onClick={()=> addCart({name , id , main_image , price , "Qty" : 1 })}>
                                <img src="/images/add-cart.svg" alt="addcart-icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-detail d-flex flex-column justify-content-center'>
                    <Link to={'/product/' +product.id+'/'+ product.slug} className=" product-title">

                        {product ? (product.name):("undefined ")}
                    </Link>
                    <p className="brand text-[#de4c24]">$
                        {product ? (product.price):("undefined ")}
                     </p>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;