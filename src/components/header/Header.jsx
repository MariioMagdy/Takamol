import React, { useEffect, useRef } from 'react';
import Navbar from './navbar/Navbar';
import myImage from '../../assets/images/Group 3029.svg';

function Header() {
    return (
        <>
            <header className='d-flex flex-column bg-white header-padding'>
                <div className='mb-2'>
                    <div className='row'>
                        <div className='col-md-6 pt-3 align-items-center mt-1'>
                            <a href='#'>
                                <img
                                    src={myImage}
                                    alt='Logo'
                                    title='شعار'
                                    data-tilt-full-page-listening
                                />
                            </a>
                        </div>
                        <div className='col-md-6 user-info'>
                            <div className='row align-items-center flex-md-nowrap'>
                                <div className='col-md-3 h3 m-0 text-center'>
                                    <a href='#' title='أشعارات'>
                                        <span className='icon-bell position-relative'>
                                            <span className='notification'>
                                                2
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className='col-md-9 ps-3 user-left'>
                                    <div className='row align-items-center justify-content-end'>
                                        <div className='col-md-3'>
                                            <div>
                                                <div className='user-img'></div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 text-end user-name ps-0'>
                                            <div>
                                                <h6 className='mb-0 fw-bold'>
                                                    أحمد فرج
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='col-md-3 ps-0 user-icon-container'>
                                            {/* <div>
                                                <span className='icon-arrow-ios-downward-outline'></span>
                                            </div> */}
                                            <div className='dropdown'>
                                                <button
                                                    className='border-0 dropdown-toggle icon-arrow-ios-downward-outline'
                                                    type='button'
                                                    id='dropdownMenuButton1'
                                                    data-bs-toggle='dropdown'
                                                    aria-expanded='false'
                                                ></button>
                                                <ul
                                                    className='dropdown-menu'
                                                    aria-labelledby='dropdownMenuButton1'
                                                >
                                                    <li>
                                                        <a
                                                            className='dropdown-item'
                                                            href='#'
                                                        >
                                                            الحساب
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className='dropdown-item'
                                                            href='#'
                                                        >
                                                            تعديل
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className='dropdown-item'
                                                            href='#'
                                                        >
                                                            تسجيل خروج
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Navbar></Navbar>
        </>
    );
}

export default Header;
