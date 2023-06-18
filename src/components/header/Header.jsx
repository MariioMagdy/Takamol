import React from 'react';
import Navbar from './navbar/Navbar';
import myImage from '../../assets/images/Group 3029.svg';

function Header() {
    return (
        <>
            <header className='d-flex flex-column bg-white header-padding'>
                <div className='mb-2'>
                    <div className='row'>
                        <div className='col-md-6 pt-3 align-items-center mt-1'>
                            <img src={myImage} alt='Logo' />
                        </div>
                        <div className='col-md-6 user-info'>
                            <div className='row align-items-center flex-md-nowrap'>
                                <div className='col-md-3 h3 m-0 text-center'>
                                    <span className='icon-bell position-relative'></span>
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
                                            <div>
                                                <span className='icon-arrow-ios-downward-outline'></span>
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
