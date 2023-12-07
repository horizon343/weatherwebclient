import { ReactComponent as Drops } from "./../../../resource/icon/drops.svg"
import { ReactComponent as UvIndex } from "./../../../resource/icon/uvIndex.svg"
import style from "./Home.module.scss"
import WeatherCard from "../../ui/weatherCard/WeatherCard"
import WeatherTimeCard from "../../ui/weatherTimeCard/WeatherTimeCard"
import InfoCard from "../../ui/infoCard/InfoCard"
import Info from "../../ui/info/Info"
import { forecastIcon, forecastText } from "./forecast"
import { treeIndex } from "./treeIndex"
import { useAppSelector } from "../../../hook/redux.hook"
import { getWeatherByHoursS } from "../../../redux/reducers/weatherByHours.reducer"
import { getWeatherByDaysS } from "../../../redux/reducers/weatherByDays.reducer"
import { getCurrentWeatherS } from "../../../redux/reducers/currentWeather.reducer"

export default function Home() {
    const weatherByHoursData = useAppSelector(getWeatherByHoursS)
    const weatherByDaysData = useAppSelector(getWeatherByDaysS)
    const currentWeatherData = useAppSelector(getCurrentWeatherS)

    if (!weatherByHoursData.weatherByHours || !weatherByDaysData.weatherByDays || !currentWeatherData.currentWeather)
        return <div></div>

    return (
        <div className={style.wrapper}>
            <div className={style.firstBox}>
                {weatherByDaysData.weatherByDays.map((item, index) => (
                    <WeatherCard
                        day={item.day}
                        temperature={Math.round(item.temperature)}
                        icon={forecastIcon[item.forecast]}
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
                            location={currentWeatherData.additionalInfo.location}
                            language={currentWeatherData.additionalInfo.language}
                            temperature={Math.round(currentWeatherData.currentWeather.temperature)}
                            forecast={forecastText[currentWeatherData.currentWeather.forecast]}
                            icon={forecastIcon[currentWeatherData.currentWeather.forecast]}
                        />
                    </div>
                </div>
                <div className={style.weatherTime}>
                    {weatherByHoursData.weatherByHours.map((item, index) => (
                        <WeatherTimeCard
                            time={item.time}
                            temperature={Math.round(item.temperature)}
                            icon={forecastIcon[item.forecast]}
                            key={index}
                        />
                    ))}
                </div>
                <div className={style.detailInfo}>
                    <InfoCard
                        title="Влажность"
                        text={`${currentWeatherData.currentWeather.humidity}%`}
                        icon={<Drops className={style.iconMini} />}
                    />
                    <InfoCard
                        title="Uv Index"
                        text={treeIndex[currentWeatherData.currentWeather.uvIndex]}
                        icon={<UvIndex className={style.iconMini} />}
                    />
                </div>
            </div>
        </div>
    )
}
