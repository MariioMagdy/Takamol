import React from 'react';

function Navbar() {
    return (
        <nav className='navbar-expand-lg header-padding'>
            <div className='container-fluid'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='icon-menu'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-center'
                    id='navbarNav'
                >
                    <ul className='headerNav'>
                        <li className='nav-item'>
                            <a className='nav-link' name='الرئيسية' href='#'>
                                <span className='icon-home'></span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='من نحن' href='#'>
                                من نحن
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='دليل الشركات'
                                href='#'
                            >
                                دليل الشركات
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='التقويم والاحداث'
                                href='#'
                            >
                                التقويم و الأحداث
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='أعلانات وأخبار'
                                href='#'
                            >
                                اعلانات و أخبار
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='المركز الأعلامي'
                                href='#'
                            >
                                المركز الأعلامي
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='أستطلاعات الرأي'
                                href='#'
                            >
                                استطلاعات الرأي
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='الخدمات العامة'
                                href='#'
                            >
                                الخدمات العامة
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='أتصل بنا' href='#'>
                                اتصل بنا
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                name='روابط ذات صلة'
                                href='#'
                            >
                                روابط ذات صلة
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
