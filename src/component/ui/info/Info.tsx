import { useEffect, useState } from "react"
import { ReactComponent as Location } from "./../../../resource/icon/location.svg"
import style from "./Info.module.scss"
import { useAppOutletContext } from "../../../hook/reactRouterDom.hook"

type TProps = {
    location: string
    language: string
    temperature: number
    forecast: string
    icon: React.ReactNode
}

export default function Info({ location, language, temperature, forecast, icon }: TProps) {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]

    const [date, setDate] = useState(new Date())
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate().toString().length !== 1 ? date.getDate() : "0" + date.getDate()
    const hours = date.getHours().toString().length !== 1 ? date.getHours() : "0" + date.getHours()
    const minutes = date.getMinutes().toString().length !== 1 ? date.getMinutes() : "0" + date.getMinutes()
    const seconds = date.getSeconds().toString().length !== 1 ? date.getSeconds() : "0" + date.getSeconds()

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000)
    }, [])

    const { setOpen } = useAppOutletContext()

    return (
        <div className={style.wrapper}>
            <div className={style.location}>
                <Location className={style.icon} />
                <p
                    className={style.locationText}
                    onClick={() => setOpen(true)}
                >
                    {location},
                </p>
                <p className={style.language}>{language}</p>
            </div>
            <div className={style.temperature}>
                <p className={style.temperatureNumber}>{temperature}°</p>
                {icon}
            </div>
            <div className={style.forecast}>
                <p className={style.forecastText}>{forecast}</p>
            </div>
            <div className={style.date}>
                <p className={style.dateText}>
                    {day} {month} {year} {hours}:{minutes}:{seconds}
                </p>
            </div>
        </div>
    )
}
