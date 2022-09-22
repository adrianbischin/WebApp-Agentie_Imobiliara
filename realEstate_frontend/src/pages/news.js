import React, { useEffect, useState } from 'react'
import Navbar from '../commons/navbar'
import Footer from '../commons/footer'
import { useTranslation } from 'react-i18next'
import '../commons/styles/news.css'
// @ts-ignore
import xmlFile from "../commons/files/news.xml";
import axios from 'axios'
const convert = require("xml-js")

export default function News() {

    const { t } = useTranslation()

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(xmlFile).then(res => {
            const data = JSON.parse(convert.xml2json(res.data, { compact: true, spaces: 4 }))
            setNews(data.root.news);
        })
    }, [])

    return (
        <div>
            <Navbar />
            <div className="w3-container w3-content w3-center w3-padding-64">
                <h2 className="w3-wide">{t('newsTitle')}</h2>
                <p className="w3-opacity"><i>{t('newsSubtitle')}</i></p>
            </div>
            {news.map((obj, index) =>
                <div key={index} className="container">
                    <div className="card">
                        <img src={require('../commons/images/' + obj.image._text)} alt='could not load'/>
                        <div className="card__text">
                            <h1>{obj.title._text}</h1>
                            <p>{obj.description._text}</p>
                            <div className="card__text__timing">
                                <div className="card__text__timing_time">
                                    <h2>{t('newsCardSource')}</h2>
                                    <p>{obj.source._text}</p>
                                </div>
                                <div className="card__text__timing_time">
                                    <h2>{t('newsCardDate')}</h2>
                                    <p>{obj.date._text}</p>
                                </div>
                                <div className="card__text__timing_time">
                                    <h2>{t('newsCardTime')}</h2>
                                    <p>{obj.time._text}</p>
                                </div>
                            </div>
                            <button className="btn" onClick={() => window.open(obj.ref._text)}>{t('newsCardButton')}</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}