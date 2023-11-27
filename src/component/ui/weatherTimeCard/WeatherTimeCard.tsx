import style from "./WeatherTimeCard.module.scss"

type TProps = {
    time: string
    temperature: number
    icon: React.ReactNode
}

export default function WeatherTimeCard({ time, temperature, icon }: TProps) {
    return (
        <div className={style.wrapper}>
            <p className={style.time}>{time}</p>
            {icon}
            <p className={style.temperature}>{temperature}°</p>
        </div>
    )
}
