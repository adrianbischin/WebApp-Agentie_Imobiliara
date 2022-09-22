import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from "../commons/navbar";
import Footer from "../commons/footer";

export default function Login() {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login() {
        let object = { email, password }
        console.log('Trying to log in with: ' + JSON.stringify(object))
        let result = await fetch('http://localhost:8000/api/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(object)
            })
        if (result !== null && result.status === 200) {
            result = await result.json()
            sessionStorage.setItem('loggedInEmail', result['email'])
            sessionStorage.setItem('loggedInName', result['name'])
            if (result['is_agent'] === 1)
                sessionStorage.setItem('loggedInRole', 'agent')
            else
                sessionStorage.setItem('loggedInRole', 'client')
            console.log('Logged in with: ' + JSON.stringify(result))
            navigate('/news')
        }
        else
            console.error('Login failed')
    }

    return (
        <div className="w3-dark-grey">
            <Navbar />
            <div style={{ textAlign: "center", width: "30%", height: "335px", marginTop: "10%", marginBottom: "10%", marginLeft: "35%" }}>
                <h1>{t('login')}</h1><br />
                <br />
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder={t('registerEmail')} className="w3-input w3-border w3-center"></input>
                <br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder={t('password')} className="w3-input w3-border w3-center"></input>
                <br />
                <button onClick={login} className="w3-button w3-black w3-section">{t('login')}</button>
            </div>
            <Footer />
        </div>

    )
}