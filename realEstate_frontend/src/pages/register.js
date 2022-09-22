import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from "../commons/navbar";
import Footer from "../commons/footer";

export default function Register() {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    async function register() {
        if (name === "")
            alert('Please enter a name')
        else if (email === "")
            alert('Please enter an email')
        else if (password === "")
            alert('Please enter a password')
        else if (role === "")
            alert('Please select a role')
        else {
            let object = { name, email, password, role }
            console.log('Trying to create new user: ' + JSON.stringify(object))
            let result = await fetch('http://localhost:8000/api/register',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json'
                    },
                    body: JSON.stringify(object)
                })
            result = await result.json()
            console.log('New user created: ' + JSON.stringify(result))
            navigate('/login')
        }
    }

    return (
        <div className="w3-dark-grey">
            <Navbar />
            <div style={{ textAlign: "center", width: "30%", height: "335px", marginTop: "10%", marginBottom: "10%", marginLeft: "35%" }}>
                <h1>{t('register')}</h1><br />
                <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} placeholder={t('registerName')} className="w3-input w3-border w3-center"></input>
                <br />
                <input type="text" required value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={t('registerEmail')} className="w3-input w3-border w3-center"></input>
                <br />
                <input type="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder={t('password')} className="w3-input w3-border w3-center"></input>
                <br />
                <select required value={role} onChange={(e) => setRole(e.target.value)} className="w3-input w3-border w3-center">
                    <option value="" disabled hidden>Please Select a Role</option>
                    <option value="agent">Real estate agent</option>
                    <option value="client">Client</option>
                </select>
                <button onClick={register} className="w3-button w3-black w3-section">{t('register')}</button>
            </div>
            <Footer />
        </div>

    )
}