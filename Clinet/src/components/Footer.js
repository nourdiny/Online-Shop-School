import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs'

function Footer() {
    return ( 
        <>

            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Shop School <br/> No.12345 Freedom, NewYark, 1111 <br/> United States
                                </address>
                                <a href='tel:+99 123456878' className='mt-2 d-block mb-0 text-white'>(+212) 601-125-147</a>
                                <a href='mailto:aaa1112234@email.com' className='mt-2 d-block mb-0 text-white'>aaa1112234@email.com</a>
                                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href='/'>
                                        <BsGithub className='fs-4'/>
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsLinkedin className='fs-4' />
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row">
                            <div className='col-6'>
                                <h4 className='text-white mb-4'>Account</h4>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to=''>About Us</Link>
                                    <Link className='text-white py-2 mb-1' to=''>Faq</Link>
                                    <Link className='text-white py-2 mb-1' to=''>Contact</Link>
                                </div>
                            </div>
                            {/* <div className='col-6'>
                                <h4 className='text-white mb-4'>Quick Links</h4>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to=''>Laptops</Link>
                                    <Link className='text-white py-2 mb-1' to=''>Headphones</Link>
                                    <Link className='text-white py-2 mb-1' to=''>Tablets</Link>
                                    <Link className='text-white py-2 mb-1' to=''>Watch</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy;{new Date().getFullYear()}; Powered by Developer's Mws
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;