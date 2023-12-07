import { ReactComponent as Unknown } from "./../../../resource/icon/unknown.svg"
import { ReactComponent as Sun } from "./../../../resource/icon/sun.svg"
import { ReactComponent as Cloud } from "./../../../resource/icon/cloud.svg"
import { ReactComponent as PartlyСloudy } from "./../../../resource/icon/partlyСloudy.svg"
import { ReactComponent as Rain } from "./../../../resource/icon/rain.svg"
import { ReactComponent as Fog } from "./../../../resource/icon/fog.svg"
import { ReactComponent as Snow } from "./../../../resource/icon/snow.svg"
import { ReactComponent as Freezing } from "./../../../resource/icon/freezing.svg"
import { ReactComponent as Ice } from "./../../../resource/icon/ice.svg"
import { ReactComponent as Storm } from "./../../../resource/icon/storm.svg"
import style from "./Home.module.scss"

type TforecastIcon = {
    [key: number]: React.ReactNode
}
type TforecastText = {
    [key: number]: string
}

export const forecastIcon: TforecastIcon = {
    0: <Unknown className={style.icon} />,
    1000: <Sun className={style.icon} />,
    1100: <Sun className={style.icon} />,
    1101: <PartlyСloudy className={style.icon} />,
    1102: <Cloud className={style.icon} />,
    1001: <Cloud className={style.icon} />,
    2000: <Fog className={style.icon} />,
    2100: <Fog className={style.icon} />,
    4000: <Rain className={style.icon} />,
    4001: <Rain className={style.icon} />,
    4200: <Rain className={style.icon} />,
    4201: <Rain className={style.icon} />,
    5000: <Snow className={style.icon} />,
    5001: <Snow className={style.icon} />,
    5100: <Snow className={style.icon} />,
    5101: <Snow className={style.icon} />,
    6000: <Freezing className={style.icon} />,
    6001: <Freezing className={style.icon} />,
    6200: <Freezing className={style.icon} />,
    6201: <Freezing className={style.icon} />,
    7000: <Ice className={style.icon} />,
    7101: <Ice className={style.icon} />,
    7102: <Ice className={style.icon} />,
    8000: <Storm className={style.icon} />
}

export const forecastText: TforecastText = {
    0: "Unknown",
    1000: "Clear, Sunny",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    1001: "Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm"
}
