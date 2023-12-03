import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import { TConfig, TGetData, TWeatherByDays } from "./weather.type"
import { getCurrentWeatherTC } from "./currentWeather.reducer"

const URL = process.env.REACT_APP_API_URL || ""

type TInitialState = {
    weatherByDays: Array<TWeatherByDays> | null
    config: TConfig
}
const initialState: TInitialState = {
    weatherByDays: null,
    config: {
        errorMessage: "",
        isError: false,
        isLoading: false
    }
}

const weatherByDaysSlice = createSlice({
    name: "weatherByDaysSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherByDaysTC.pending, (state) => {
                state.config.isError = false
                state.config.isLoading = true
                state.config.errorMessage = ""
            })
            .addCase(getWeatherByDaysTC.fulfilled, (state, action) => {
                state.config.isLoading = false
                state.weatherByDays = action.payload
            })
            .addCase(getWeatherByDaysTC.rejected, (state, action) => {
                state.config.isError = true
                state.config.isLoading = false
                state.config.errorMessage = action.payload as string
            })
    }
})
export default weatherByDaysSlice.reducer

export const getWeatherByDaysTC = createAsyncThunk<Array<TWeatherByDays>, string, { rejectValue: string }>(
    "getWeatherByDaysTC",
    async (location, thunkApi) => {
        try {
            const response: AxiosResponse<TGetData> = await axios.get<TGetData>(
                `${URL}&timesteps=1d&location=${location}`
            )

            const days: Array<string> = [
                "Воскресенье",
                "Понедельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Суббота"
            ]
            const result: Array<TWeatherByDays> = []
            response.data.data.timelines[0].intervals.map((item) => {
                const day: number = new Date(item.startTime).getUTCDay()

                result.push({
                    forecast: item.values.weatherCode,
                    temperature: item.values.temperature,
                    day: days[day]
                })
            })

            await thunkApi.dispatch(getCurrentWeatherTC(response))

            return result
        } catch (error) {
            return thunkApi.rejectWithValue("Ошибка запроса")
        }
    }
)
