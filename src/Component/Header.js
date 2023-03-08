import React from 'react'
import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import img3 from '../images/img3.svg'
import img4 from '../images/img4.svg'
import logo1 from '../images/logo-1.svg';
import manimg from "../images/Menimg.svg";
import cloud from "../images/cloud.svg";
import Navbar1 from './Navbar1'
import './scss/header.scss'


function Header() {
    return (

        <div className="header container-fluid">
            <div className='container'>
                <img src={img1} className='img1 img-fluid' />
                <img src={img2} className='img2 img-fluid' />
                <Navbar1 />
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-2'>
                    <img src={cloud} className='cloud img-fluid' alt='Logo' />
                    <img src={manimg} className='Manimg img-fluid' alt='Logo' />
                </div>
                <div className='Mendletext col-md-4 '>
                    <h1>Mendleson
                        Communication
                        and Engagement</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                </div>
            </div>
            <div>
                <img src={img3} className='img3 img-fluid' />
                <img src={img4} className='img4 img-fluid' />
            </div>


        </div>
    )
}

export default Header;