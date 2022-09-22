import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

export default function Navbar() {

    const { t } = useTranslation()
    const navigate = useNavigate()

    function changeLanguage(lang) {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const logOut = () => {
        sessionStorage.clear()
        sessionStorage.setItem('loggedInEmail', 'false')
        console.log('Logged out');
        navigate('/')
    }

    return (
        <div className="w3-bar w3-theme-d3 w3-left-align">
            <a href="/" className="w3-bar-item w3-button w3-hide-small w3-hover-white"><i className="fa fa-home w3-margin-right"></i>{t('home')}</a>
            <a href="/news" className="w3-bar-item w3-button w3-hide-small w3-hover-white">{t('newsTitle')}</a>
            <a href="/about" className="w3-bar-item w3-button w3-hide-small w3-hover-white">{t('aboutTitle')}</a>
            <div className="w3-dropdown-hover w3-hide-small">
                <a className="w3-button" href="/renting">{t('rentingTitle')}<i className="fa fa-caret-down"></i></a>
                <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                    <a href="/renting#renting-single-room" className="w3-bar-item w3-button">{t('singleRooms')}</a>
                    <a href="/renting#renting-apartment" className="w3-bar-item w3-button">{t('apartments')}</a>
                    <a href="/renting#renting-house" className="w3-bar-item w3-button">{t('houses')}</a>
                </div>
            </div>
            <div className="w3-dropdown-hover w3-hide-small">
                <a className="w3-button" href="/selling">{t('sellingTitle')}<i className="fa fa-caret-down"></i></a>
                <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                    <a href="/selling#selling-single-room" className="w3-bar-item w3-button">{t('singleRooms')}</a>
                    <a href="/selling#selling-apartment" className="w3-bar-item w3-button">{t('apartments')}</a>
                    <a href="/selling#selling-house" className="w3-bar-item w3-button">{t('houses')}</a>
                </div>
            </div>
            {
                sessionStorage.getItem('loggedInEmail') !== "false" && sessionStorage.getItem('loggedInRole') === "agent" &&
                <a href="/add-offer" className="w3-bar-item w3-button w3-hide-small w3-hover-white">{t('addOfferTitle')}</a>
            }
            {
                sessionStorage.getItem('loggedInEmail') !== 'false' &&
                <>
                    <a href="/gdpr" className="w3-bar-item w3-button w3-hide-small w3-hover-white">GDPR</a>
                    <a href="/user-info" className="w3-bar-item w3-button w3-hide-small w3-hover-white">{t('userInfo')}</a>
                </>
            }
            <a href="/contact" className="w3-bar-item w3-button w3-hide-small w3-hover-white">{t('contactTitle')}</a>

            <button className='w3-button w3-black w3-right' onClick={() => changeLanguage('ro')}>Ro</button>
            <button className='w3-button w3-black w3-right' onClick={() => changeLanguage('en')}>En</button>
            {
                sessionStorage.getItem('loggedInEmail') === 'false' ?
                    <>
                        <a href="/register" className="w3-bar-item w3-button w3-hide-small w3-hover-white w3-right">{t('register')}</a>
                        <a href="/login" className="w3-bar-item w3-button w3-hide-small w3-hover-white w3-right">{t('login')}</a>
                    </>
                    :
                    <>
                        <button onClick={logOut} className="w3-bar-item w3-button w3-hide-small w3-hover-white w3-right">{t('logout')}</button>
                    </>

            }

        </div >
    )
}