import React from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import '../commons/styles/w3_theme_black.css'
import '../commons/styles/w3.css'
// @ts-ignore
import home_image from '../commons/images/home_image_2.jpg'

export default function Home() {
    return(
        <div>
            <Navbar/>
            <img src={home_image} alt="" width="100%"/>
            <Footer/>
        </div>
    )
}