import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ReactComponent as Close } from "./../../../resource/icon/close.svg"
import style from "./SearchCity.module.scss"
import TextField from "../../ui/textField/TextField"
import { TTextFieldModel } from "../../../model/textField.model"
import { useAppDispatch, useAppSelector } from "../../../hook/redux.hook"
import { getCurrentWeatherS, setLocationAC } from "../../../redux/reducers/currentWeather.reducer"
import { getWeatherByDaysS, getWeatherByDaysTC } from "../../../redux/reducers/weatherByDays.reducer"
import { getWeatherByHoursTC } from "../../../redux/reducers/weatherByHours.reducer"

type TProps = {
    onClose: () => void
}

export default function SearchCity({ onClose }: TProps) {
    const weatherByDaysData = useAppSelector(getWeatherByDaysS)
    const currentWeatherData = useAppSelector(getCurrentWeatherS)
    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useForm<TTextFieldModel>({
        defaultValues: {
            location: currentWeatherData.additionalInfo.location
        }
    })

    const [isDisable, setDisable] = useState(false)
    const onSearchCity = handleSubmit(async (data) => {
        setDisable(true)
        await dispatch(getWeatherByDaysTC(data.location))
        if (!weatherByDaysData.config.isError) {
            await dispatch(getWeatherByHoursTC(data.location))
            await dispatch(setLocationAC(data.location))
            onClose()
        } else alert("Ошибка запроса, повторите попытку позднее")
        setDisable(false)
    })

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" && !isDisable) onSearchCity()
    }
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    })

    return (
        <div className={style.wrapper}>
            <div className={style.TextFieldBox}>
                <TextField
                    placeholder="Город, населённый пункт"
                    register={register}
                    name="location"
                    isDisable={isDisable}
                    onClick={onSearchCity}
                />
            </div>
            <Close
                className={style.icon}
                onClick={onClose}
            />
        </div>
    )
}
