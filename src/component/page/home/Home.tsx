import { ReactComponent as Sun } from "./../../../resource/icon/sun.svg"
import { ReactComponent as Rain } from "./../../../resource/icon/rain.svg"
import { ReactComponent as Snow } from "./../../../resource/icon/snow.svg"
import { ReactComponent as Drops } from "./../../../resource/icon/drops.svg"
import { ReactComponent as UvIndex } from "./../../../resource/icon/uvIndex.svg"
import style from "./Home.module.scss"
import WeatherCard from "../../ui/weatherCard/WeatherCard"
import WeatherTimeCard from "../../ui/weatherTimeCard/WeatherTimeCard"
import InfoCard from "../../ui/infoCard/InfoCard"
import Info from "../../ui/info/Info"

export default function Home() {
    const days = [
        { day: "Понедельник", temperature: 28, icon: <Sun className={style.icon} /> },
        { day: "Вторник", temperature: 24, icon: <Sun className={style.icon} /> },
        { day: "Среда", temperature: 32, icon: <Rain className={style.icon} /> },
        { day: "Четверг", temperature: 26, icon: <Sun className={style.icon} /> },
        { day: "Пятница", temperature: 35, icon: <Snow className={style.icon} /> },
        { day: "Суббота", temperature: 23, icon: <Rain className={style.icon} /> },
        { day: "Воскресенье", temperature: 14, icon: <Sun className={style.icon} /> }
    ]

    const times = [
        { time: "06:00", temperature: 28, icon: <Sun className={style.icon} /> },
        { time: "10:00", temperature: 32, icon: <Sun className={style.icon} /> },
        { time: "14:00", temperature: 34, icon: <Rain className={style.icon} /> },
        { time: "18:00", temperature: 15, icon: <Sun className={style.icon} /> },
        { time: "22:00", temperature: 23, icon: <Snow className={style.icon} /> },
        { time: "02:00", temperature: 17, icon: <Rain className={style.icon} /> }
    ]

    return (
        <div className={style.wrapper}>
            <div className={style.firstBox}>
                {days.map((day, index) => (
                    <WeatherCard
                        day={day.day}
                        temperature={day.temperature}
                        icon={day.icon}
                        key={index}
                    />
                ))}
            </div>
            <div className={style.secondBox}>
                <div className={style.imgBox}>
                    <img
                        className={style.img}
                        src="https://img.goodfon.ru/wallpaper/nbig/7/c0/oleg-magni-by-oleg-magni-tsvet-tsvetok-rastenie-rasteniia-fl.jpg"
                        alt="bg"
                    />
                    <div className={style.infoBox}>
                        <Info
                            location="Екатеринбург"
                            language="RU"
                            temperature={28}
                            forecast="Облачно с прояснениями"
                            icon={<Sun className={`${style.icon} ${style.white}`} />}
                        />
                    </div>
                </div>
                <div className={style.weatherTime}>
                    {times.map((time, index) => (
                        <WeatherTimeCard
                            time={time.time}
                            temperature={time.temperature}
                            icon={time.icon}
                            key={index}
                        />
                    ))}
                </div>
                <div className={style.detailInfo}>
                    <InfoCard
                        title="Влажность"
                        text="17%"
                        icon={<Drops className={style.iconMini} />}
                    />
                    <InfoCard
                        title="Uv Index"
                        text="Low"
                        icon={<UvIndex className={style.iconMini} />}
                    />
                </div>
            </div>
        </div>
    )
}
