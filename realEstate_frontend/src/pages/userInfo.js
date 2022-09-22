import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../commons/footer";
import Navbar from "../commons/navbar";

export default function UserInfo() {

    const { t } = useTranslation()

    const [name, setName] = useState(sessionStorage.getItem('loggedInName'))
    const [email, setEmail] = useState(sessionStorage.getItem('loggedInEmail'))

    async function updateInfo() {
        let oldName = sessionStorage.getItem('loggedInName')
        let oldEmail = sessionStorage.getItem('loggedInEmail')
        let object = { oldName, oldEmail, name, email }
        console.log('Trying to update user info: ' + JSON.stringify(object))
        let result = await fetch('http://localhost:8000/api/updateInfo',
            {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(object)
            })
        if (result !== null && result.status === 200) {
            result = await result.json()
            sessionStorage.setItem('loggedInName', result['name'])
            sessionStorage.setItem('loggedInEmail', result['email'])
            setName(result['name'])
            setEmail(result['email'])
            console.log('User updated successfully: ' + JSON.stringify(result))
        }
        else {
            result = await result.json()
            console.error('Update user result: ' + JSON.stringify(result))
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ textAlign: "center", width: "30%", height: "335px", marginTop: "10%", marginBottom: "10%", marginLeft: "35%" }}>
                <h1>{t('userInfo')}</h1><br />
                <label htmlFor="name">{t('userName')}</label><br /><br />
                <input id="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="w3-input w3-border w3-center"></input><br />
                <label htmlFor="email">{t('userEmail')}</label><br /><br />
                <input id="email" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="w3-input w3-border w3-center"></input><br />
                <button onClick={updateInfo} className="w3-button w3-black w3-section">{t('userInfoUpdateButton')}</button>
            </div>
            <Footer />
        </div>
    )
}