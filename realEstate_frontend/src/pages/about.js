import React from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import '../commons/styles/w3_theme_black.css'
import '../commons/styles/w3.css'
// @ts-ignore
import about_us_video from '../commons/videos/Apartment_Video_Advertising_2.mp4'
import { useTranslation } from 'react-i18next'

export default function About() {
    
    const {t} = useTranslation()

    return(
        <div>
            <Navbar/>
            <div className="w3-container w3-content w3-center w3-padding-64" style={{width: '800px'}}>
                <h2 className="w3-wide">{t('aboutTitle')}</h2>
                <p className="w3-opacity"><i>{t('aboutSubtitle')}</i></p>
                <br/>
                <p className="w3-justify">{t('aboutContent')}</p>
                <video width="700" height="400" controls>
                    <source src={about_us_video} type="video/mp4"/>
                </video>
            </div>
            <Footer/>
        </div>
    )
}