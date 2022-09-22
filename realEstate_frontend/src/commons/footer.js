import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const {t} = useTranslation()

    return (
        <footer className="w3-container w3-padding-30 w3-center w3-opacity w3-dark-grey w3-xlarge">
            <p className="w3-medium">{t('footer')}Adrian Bischin</p>
        </footer>
    )
}