import style from "./WeatherCard.module.scss"

type TProps = {
    day: string
    temperature: number
    icon: React.ReactNode
}

export default function WeatherCard({ day, temperature, icon }: TProps) {
    return (
        <div className={style.wrapper}>
            <p className={style.day}>{day}</p>
            <div className={style.box}>
                <p className={style.temperature}>{temperature}°</p>
                {icon}
            </div>
        </div>
    )
}
