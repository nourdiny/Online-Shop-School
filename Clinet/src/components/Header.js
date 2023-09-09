import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client.js";


function Header() {
  const {user, token, setUser, setToken, message, setMessage , cart} = useStateContext();
  const path = 'http://127.0.0.1:8000/storage/';
  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
    
  }
  console.log(user);
    return ( 
        <>
            <header className='header-upper py-3 d-flex  items-center justify-between min-h-[80px]'>
                <div className='container-xxl'>
                    <div className='row align-content-center justify-between'>
                        <div className='col-2 d-flex align-items-center'>
                            <h2>
                                <Link to='/' className='text-white'>ShopSchool</Link>
                            </h2>
                        </div>
                        <div className='max-w-fit '>
                            <div className='header-upper-links d-flex'>
                            { !token  ? (
                                <div className='d-flex  align-content-center justify-between'>
                                    
                                    <Link to='/login' className='align-items-center  text-white'>
                                        <p className='mb-0'>Login</p>
                                    </Link>
                                    <Link to='/sign_up' className='align-items-center ml-[20px] text-white'>
                                        <p className='mb-0'>Sign up</p>
                                    </Link>
                                                                              
                                
                                </div>
                                ) : (
                                
                                <div className='d-flex  items-center justify-between gap-x-5'>
                                    
                                    <Link to='/cart' className=' text-white relative mr-5'>
                                        <img src='/images/cart.svg' alt='cart-icon' />
                                        <div className='d-flex absolute -top-1 -right-[25px] flex-column'>
                                            <span className='badge bg-white text-dark'>{cart.length}</span>
                                        </div>
                                    </Link>
                                    <Link to='/profile' className=' align-items-center  text-white'>
                                        <img src={path + user.profile_photo_path} alt='user-icon'
                                        className='rounded-full w-[45px] h-[45px] ' />
                                    </Link>
                                    <a onClick={onLogout} className=' align-items-center  text-white cursor-pointer' >
                                        <img src='/images/logout.png' alt='user-icon' />
                                    </a>
                                </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                        <NavLink to='/' 
                                            className="btn btn-secondary bg-transparent border-0 gap-15 d-flex align-items-center" >
                                            <img src='/images/menu.svg' alt='menu-icon'/>
                                            <span className='me-5 d-inline-block'>Home</span>
                                        </NavLink>
                                    
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                    
                                        <NavLink to='/store'>Our Store</NavLink>

                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
     );
}

export default Header;