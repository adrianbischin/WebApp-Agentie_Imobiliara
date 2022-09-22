import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../commons/footer";
import Navbar from "../commons/navbar";

export default function Gdpr() {

    const { t } = useTranslation()

    const [name, setName] = useState("")
    const [email] = useState(sessionStorage.getItem('loggedInEmail'))
    const [file, setFile] = useState("")

    const updateFileAndName = (e) => {
        setName(e.target.files[0].name)
        setFile(e.target.files[0])
    }

    async function uploadFile() {
        if (file === "")
            alert('Please select a file')
        else {
            console.log('Trying to upload GDPR file: ', '\n     Name: ', name, '\n     Email', email, '\n     Data: ', file)
            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('pdf', file)
            let result = await fetch('http://localhost:8000/api/uploadGdpr',
                {
                    method: 'POST',
                    body: formData
                })
            if (result !== null && result.status === 200) {
                result = await result.json()
                console.log('File uploaded successfully: ' + JSON.stringify(result))
            }
            else {
                result = await result.json()
                console.error('File upload result: ' + JSON.stringify(result))
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ textAlign: "center", width: "30%", height: "80%", marginTop: "5%", marginBottom: "15%", marginLeft: "35%" }}>
                <h1>{t('gdprTitle')}</h1><br /><br />
                <h5>{t('gdprEmail')}</h5>
                <h5 style={{fontWeight: "bold"}}>{email}</h5><br /><br />
                <input type="file" onChange={(e) => updateFileAndName(e)} className="w3-input w3-border w3-center"></input><br /><br />
                <button onClick={uploadFile} className="w3-button w3-black w3-section">{t('gdprButton')}</button>
                <h6>{t('gdprNote')}</h6>
            </div>
            <Footer />
        </div>
    )
}