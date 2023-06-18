import React from 'react';

function Navbar() {
    return (
        <nav className='header-padding'>
            <ul className='headerNav'>
                <li>
                    <span className='icon-home'></span>
                </li>
                <li>من نحن</li>
                <li>دليل الشركات</li>
                <li>التقويم و الأحداث</li>
                <li>اعلانات و أخبار</li>
                <li>المركز الأعلامي</li>
                <li>استطلاعات الرأي</li>
                <li>الخدمات العامة</li>
                <li>اتصل بنا</li>
                <li>روابط ذات صلة</li>
            </ul>
        </nav>
    );
}

export default Navbar;
