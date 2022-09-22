import React from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import '../commons/styles/w3_theme_black.css'
import '../commons/styles/w3.css'
// @ts-ignore
import offer1 from '../commons/images/1st_offer.jpg'
// @ts-ignore
import offer2 from '../commons/images/2nd_offer.jpg'
// @ts-ignore
import offer3 from '../commons/images/3rd_offer.jpg'
import { useTranslation } from 'react-i18next'

export default function Renting() {
    
    const {t} = useTranslation()

    return(
        <div>
            <Navbar/>
            <div className="w3-container w3-content w3-center w3-padding-64" style={{width: '800px'}}>
                <h2 className="w3-wide">{t('rentingTitle')}</h2>
                <br/>
                <p id="renting-single-room" className="w3-opacity"><i>{t('singleRooms')}</i></p>
                <div className="w3-row-padding w3-padding-32" style={{margin: '0 -16px'}}>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer1} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer2} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer3} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                </div>
                <br/>
                <p id="renting-apartment" className="w3-opacity"><i>{t('apartments')}</i></p>
                <div className="w3-row-padding w3-padding-32" style={{margin: '0 -16px'}}>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer1} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer2} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer3} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                </div>
                <br/>
                <p id="renting-house" className="w3-opacity"><i>{t('houses')}</i></p>
                <div className="w3-row-padding w3-padding-32" style={{margin: '0 -16px'}}>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer1} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer2} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <img src={offer3} alt="1st offer" style={{width: '100%'}} className="w3-hover-opacity"/>
                        <div className="w3-container w3-dark-grey">
                            <p><b>{t('offerTitle')}</b></p>
                            <p className="w3-opacity">{t('offerDate')}</p>
                            <p>{t('offerDescription')}</p>
                            <button className="w3-button w3-black w3-margin-bottom"
                                onClick={() => document.getElementById('ticketModal').style.display='block'}>{t('offerButton')}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}