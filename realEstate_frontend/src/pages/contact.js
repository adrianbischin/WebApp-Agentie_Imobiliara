import React, { useState } from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import '../commons/styles/w3_theme_black.css'
import '../commons/styles/w3.css'
import { useTranslation } from 'react-i18next'

export default function Contact() {
    
    const {t} = useTranslation()
    const [emailFrom, setEmailFrom] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail() {
        const requestBody = { emailFrom, message }
        fetch('http://localhost:5000/email',
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(requestBody)
            }
        )
            .then(response => response.text())
            .then(text => { console.log('Response: ', text) })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar />
            <div style={{width: "80%", height: "335px", marginTop: "10%", marginBottom: "10%"}}>
                <div style={{ width: "30%", float: "left", marginLeft: "20%", textAlign: "center" }}>
                    <h1 id="contact" ><i style={{fontWeight: "bold"}}>{t('contactTitle')}</i></h1>
                    <br /><br />
                    <i ></i>{t('location')}Cluj-Napoca, Romania<br /><br />
                    <i ></i>{t('phone')}+4 0740 xxx xxx<br /><br />
                    <i > </i>{t('email')}mail@mail.com<br /><br />
                </div>
                <div style={{width: "40%", float: "right"}}>
                    <input className="w3-input w3-border" type="text" placeholder={t('placeholderEmail')} required onChange={e => setEmailFrom(e.target.value)} /><br/>
                    <textarea className="w3-input w3-border" style={{height: "200px", resize: "none"}} placeholder={t('placeholderMessage')} required name="Message" onChange={e => setMessage(e.target.value)} />
                    <button className="w3-button w3-black w3-section w3-right" type="submit" onClick={sendEmail}>{t('send')}</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}