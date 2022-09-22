import React, { useState } from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import '../commons/styles/w3_theme_black.css'
import '../commons/styles/w3.css'
import { useTranslation } from 'react-i18next'
import moment from 'moment-timezone'

export default function AddOffer() {

    let date = ""
    const { t } = useTranslation()
    const [email] = useState(sessionStorage.getItem('loggedInEmail'))
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    async function AddOfferListener() {
        date=moment(Date.now()).format('YYYY/MM/DD')
        if (title === "")
            alert('Please enter a title')
        else if (date === "")
            alert('Please enter a date')
        else if (description === "")
            alert('Please enter a description')
        else if (image === "")
            alert('Please select an image')
        else {
            console.log('Trying to insert a new offer: ', '\n     Email: ', email, '\n     Title: ', title,
                '\n     Date: ', date, '\n     Description: ', description, '\n     image: ', image)
            const formData = new FormData()
            formData.append('email', email)
            formData.append('title', title)
            formData.append('date', date)
            formData.append('description', description)
            formData.append('image', image)
            let result = await fetch('http://localhost:8000/api/addOffer',
                {
                    method: 'POST',
                    body: formData
                })
            if (result !== null && result.status === 200) {
                result = await result.json()
                console.log('Offer added successfully: ' + JSON.stringify(result))
            }
            else {
                result = await result.json()
                console.error('Offer adding result: ' + JSON.stringify(result))
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="w3-container w3-content w3-center w3-padding-64" style={{ width: '800px' }}>
                <h1><i style={{ fontWeight: "bold" }}>{t('addOfferTitle')}</i></h1><br /><br /><br />
                <input type="text" placeholder={t('addOfferInputTitle')} required onChange={e => setTitle(e.target.value)} className="w3-input w3-border w3-center" /><br />
                <textarea placeholder={t('addOfferInputDescription')} required onChange={e => setDescription(e.target.value)} className="w3-border w3-center" style={{width: "100%", height: "200px"}}/><br /><br />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w3-input w3-border w3-center"></input><br /><br />
                <button onClick={AddOfferListener} className="w3-button w3-black w3-section">{t('addOfferInputButton')} </button>
            </div>
            <Footer />
        </div>
    )
}